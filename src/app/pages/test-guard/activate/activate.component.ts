import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activate',
  template: `
    <div class="wrapper-content">
      <h1>This page is guarded</h1>
      <p>Welcome, Leo!</p>
    </div>
  `,
  styles: [],
})
export class ActivateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
