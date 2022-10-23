import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pm-root',
  styleUrls: ['./app.component.css'],
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ title }}</a>
      <ul class="nav nav-pills">
        <li><a routerLink="/products">Product List </a></li>
        <li><a routerLink="/welcome">Home </a></li>
      </ul>
    </nav>
    <div style="  margin-left: 30px">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'Max Product Management';
  pageDescription = 'Another variable';
}
