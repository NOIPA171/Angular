import { Component, ContentChild } from '@angular/core';
import { TemplateRefDirective } from 'src/app/directives/template-ref.directive';

@Component({
  selector: 'app-single-slot',
  template: `<div>
    Get ContentChild with appTemplateRef <br />
    <button (click)="toggleExpand()">Click to show!</button>
    <div *ngIf="expanded">
      <ng-content></ng-content>
      <ng-container [ngTemplateOutlet]="content.templateRef"></ng-container>
    </div>
  </div>`,
})
export class SingleSlotComponent {
  @ContentChild(TemplateRefDirective) content!: TemplateRefDirective;
  expanded = false;
  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
