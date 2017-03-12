import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  moduleId: module.id,
  styleUrls: [ './app.component.css' ],
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'CV';
}