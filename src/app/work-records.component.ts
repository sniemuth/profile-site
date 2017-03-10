import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { WorkRecord } from './work-record';
import { WorkRecordService } from './work-record.service';

@Component({
  moduleId: module.id,
  selector: 'my-work-records',
  templateUrl: './work-records.component.html',
  styleUrls: ['./work-records.component.css'],
  providers: [WorkRecordService]
})

export class WorkRecordsComponent implements OnInit {
  constructor(private router: Router, private workRecordService: WorkRecordService) { }
  ngOnInit(): void {
    this.getWorkRecords();
  }


  selectedWorkRecord : WorkRecord;  
  workRecords : WorkRecord[];

  getWorkRecords(): void {
    this.workRecordService.getWorkRecords().then(workRecords => this.workRecords = workRecords);
  };

  onSelect(workRecord: WorkRecord): void {
    this.selectedWorkRecord = workRecord;
  };

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedWorkRecord.id]);
  }

}
