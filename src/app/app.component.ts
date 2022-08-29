import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <div>{{pageDescription + ' and concatination'}}{{20+1}}</div>
  <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Max Product Management';
  pageDescription = 'Another variable';
}