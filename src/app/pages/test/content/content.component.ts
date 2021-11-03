import {
  Component,
  ContentChild,
  ViewChild,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements AfterContentInit, AfterViewInit {
  @ContentChild('cnt') child: any;
  @ViewChild('view') viewChild: any;
  contentString = '';
  viewString = '';

  constructor() {}

  ngAfterContentInit() {
    this.contentString = this.child.nativeElement.innerText;
  }

  ngAfterViewInit() {
    // prevent error: Expression has changed after it was checked
    // => immediately updating view in view init causes this issue
    setTimeout(() => {
      this.viewString = this.viewChild.nativeElement.innerText;
    }, 0);
  }
}
