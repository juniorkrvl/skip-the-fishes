import { Component } from '@angular/core';

@Component({
  selector: 'sk-app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
