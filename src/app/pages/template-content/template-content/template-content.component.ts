import {
  Component,
  QueryList,
  TemplateRef,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import { TemplateRefDirective } from 'src/app/directives/template-ref.directive';

@Component({
  selector: 'app-template-content',
  templateUrl: './template-content.component.html',
})
export class TemplateContentComponent implements AfterViewInit {
  // these are for carousel
  @ViewChildren(TemplateRefDirective)
  carouselPages!: QueryList<TemplateRefDirective>; // get all ng-templates with appTemplateRef
  displayPage!: TemplateRef<any>; // this is what we'll be showing
  index = 0;

  setDisplayPage(): void {
    // assign displayPage outlet
    const page = this?.carouselPages?.find(
      (_item: any, index: number) => index === this.index
    );
    if (page) {
      this.displayPage = page.templateRef;
    }
  }

  ngAfterViewInit() {
    // initialize displayPage
    setTimeout(() => {
      this.setDisplayPage();
    }, 0);
  }

  next() {
    this.index = (this.index + 1) % this.carouselPages.length;
    this.setDisplayPage();
  }
}
