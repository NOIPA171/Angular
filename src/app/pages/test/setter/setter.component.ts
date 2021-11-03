import { Component, OnInit } from '@angular/core';

const valuesList = ['A', 'B', 'C'];

@Component({
  selector: 'app-setter',
  templateUrl: './setter.component.html',
  styleUrls: ['./setter.component.scss'],
})
export class SetterComponent implements OnInit {
  // add count to title for string display
  get list(): any {
    return this._list.map((item) => item.title + ` (${item.count})`);
  }
  private _list: { title?: string; count?: number }[] = [];

  value: string = valuesList[0];
  count = 1;
  constructor() {}

  ngOnInit(): void {}

  addListItem() {
    const lenth = valuesList.length;
    this._list.push({
      title: this.value + '_item',
      // add 0.1 so that the next cycle beings on the next item
      // e.g. 3/3 is still on the 1st cyle, count should be 0 instead of 1
      count: Math.floor(this.count / (lenth + 0.1)),
    });
    this.value = valuesList[this.count % lenth];
    this.count += 1;
  }
  deleteList() {
    this._list = [];
    this.count = 0;
    this.value = valuesList[0];
  }
}
