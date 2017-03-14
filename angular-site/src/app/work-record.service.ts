import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { WorkRecord } from './work-record';

@Injectable()
export class WorkRecordService {
  private workRecordUrl = 'http://madebysethcvapiweb20170311075832.azurewebsites.net/api/workrecords';  // URL to web api
  // private workRecordUrl = "http://localhost:56807/api/workrecords";

  constructor(private http: Http) { }

  // Use the Promise from rxjs for the http call to not block
  getWorkRecords(): Promise<WorkRecord[]> {
    return this.http.get(this.workRecordUrl)
      .toPromise()
      .then(
      response => response.json() as WorkRecord[]
      )
      .catch(this.handleError);
  }

  // Handle error
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