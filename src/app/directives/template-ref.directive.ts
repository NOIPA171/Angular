import { Directive, HostListener, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplateRef]',
})
export class TemplateRefDirective {
  constructor(public templateRef: TemplateRef<any>) {} //Template ref for ng-template, ElementRef for div

  @HostListener('click') onClick() {
    console.log('clicked!', this.templateRef);
  }
}
