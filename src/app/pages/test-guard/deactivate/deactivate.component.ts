import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deactivate',
  template: `
    <div class="wrapper-content">
      <h1>Check the checkbox to leave this page</h1>
      <label>
        <input [(ngModel)]="isChecked" type="checkbox" /> Check me to leave!
      </label>
    </div>
  `,
  styles: [],
})
export class DeactivateComponent implements OnInit {
  isChecked = false;
  constructor() {}

  ngOnInit(): void {}
}
