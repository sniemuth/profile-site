import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { WorkRecordDetailComponent } from './work-record-detail.component';
import { WorkRecordsComponent }     from './work-records.component';
import { WorkRecordService }         from './work-record.service';
import { DashboardComponent }  from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { CvSummaryComponent } from './cv-summary/cv-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkRecordDetailComponent,
    WorkRecordsComponent,  
    DashboardComponent, 
    CvSummaryComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule   
  ],
  providers: [ WorkRecordService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
