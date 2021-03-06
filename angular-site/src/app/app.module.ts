import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { AppComponent } from './app.component';
import { WorkRecordDetailComponent } from './work-record-detail/work-record-detail.component';
import { WorkRecordService }         from './work-record.service';
import { AppRoutingModule }     from './app-routing.module';
import { CvSummaryComponent } from './cv-summary/cv-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkRecordDetailComponent, 
    CvSummaryComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule   
  ],
  providers: [ WorkRecordService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
