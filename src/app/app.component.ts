import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  moduleId: module.id,
  styleUrls: [ './app.component.css' ],
  template: `
    <h1>{{title}}</h1>
    <nav>
     <a routerLinkActive="active" routerLink="/dashboard">Dashboard</a>
     <a routerLinkActive="active" routerLink="/work-records">Work Records</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'CVs';
}