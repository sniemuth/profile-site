import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { WorkRecordService } from './work-record.service';
import { WorkRecord } from './work-record';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-work-record-detail',
  moduleId: module.id,
  templateUrl: './work-record-detail.component.html',
  styleUrls: [ './work-record-detail.component.css' ],
})

export class WorkRecordDetailComponent implements OnInit {
    constructor(
    private workRecordService: WorkRecordService,
    private route: ActivatedRoute,
    private location: Location
    ) {};
   
   ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.workRecordService.getWorkRecord(+params['id']))
        .subscribe(workRecord => this.workRecord = workRecord);
    };

    goBack(): void {
        this.location.back();
    };
   
    workRecord: WorkRecord;
}