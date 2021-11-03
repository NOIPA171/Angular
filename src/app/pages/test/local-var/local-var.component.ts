import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-var',
  templateUrl: './local-var.component.html',
  styleUrls: ['./local-var.component.scss'],
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
