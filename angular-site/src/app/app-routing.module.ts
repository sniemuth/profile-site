import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkRecordDetailComponent }  from './work-record-detail/work-record-detail.component';
import { CvSummaryComponent }  from './cv-summary/cv-summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/cv-summary', pathMatch: 'full' },
  { path: 'cv-summary',  component: CvSummaryComponent },
  { path: 'detail/:id', component: CvSummaryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}