import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class = 'container'>
  <router-outlet></router-outlet>
  </div>
  `,

  styleUrls: [`./app.component.css`]
})
export class AppComponent {
  pageTitle: string = 'eHealth';
}