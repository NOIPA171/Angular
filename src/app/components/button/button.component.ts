import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color = '#000';
  @Input() size = 'default';
  @Input() type = 'button';
  @Input() disabled?: boolean;
  @Output() btnClick = new EventEmitter();
  constructor() {}
}
