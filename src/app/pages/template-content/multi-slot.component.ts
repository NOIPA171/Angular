import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-slot',
  template: `<div>
    slot left:
    <ng-content select="[left]"></ng-content>
    slot right:
    <ng-content select="[right]"></ng-content>
    anything else:
    <ng-content></ng-content>
  </div>`,
})
export class MultiSlotComponent {}
