import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { WorkRecordsComponent }      from './work-records.component';
import { WorkRecordDetailComponent }  from './work-record-detail.component';
import { CvSummaryComponent }  from './cv-summary/cv-summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'cv-summary',  component: CvSummaryComponent },
  { path: 'detail/:id', component: WorkRecordDetailComponent },
  { path: 'work-records',     component: WorkRecordsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}