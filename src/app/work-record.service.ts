import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { WorkRecord } from './work-record';

@Injectable()
export class WorkRecordService {
  private workRecordUrl = 'api/workrecords';  // URL to web api

  constructor(private http: Http) { }

  getWorkRecords(): Promise<WorkRecord[]> {
    return this.http.get(this.workRecordUrl)
               .toPromise()
               .then(response => response.json().data as WorkRecord[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getWorkRecord(id: number): Promise<WorkRecord> {
  const url = `${this.workRecordUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as WorkRecord)
    .catch(this.handleError);
}


}