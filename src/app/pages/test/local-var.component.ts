import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-var',
  template: `
    <div class="displaybox">
      {{ value }}
    </div>
  `,
  styles: [
    `
      .displaybox {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: solid 2px black;
        width: 50px;
        height: 50px;
        font-weight: bold;
      }
    `,
  ],
})
export class LocalVarComponent implements OnInit {
  value = 0;

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.value += 1;
  }

  subtract() {
    this.value -= 1;
  }

  reset() {
    this.value = 0;
  }
}
