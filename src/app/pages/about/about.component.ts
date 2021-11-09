import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="wrapper-content">
      <h2>Task Tracker</h2>
      <h4>Verion: 1.0.0</h4>
      <a routerLink="/">Go Back</a>
    </div>
  `,
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
