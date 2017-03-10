import { Component, OnInit } from '@angular/core';

import { WorkRecord } from './work-record';
import { WorkRecordService } from './work-record.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  workRecords: WorkRecord[] = [];

  constructor(private workRecordService: WorkRecordService) { }

  ngOnInit(): void {
    this.workRecordService.getWorkRecords()
      .then(workRecords => this.workRecords = workRecords.slice(1, 5));
  }
}