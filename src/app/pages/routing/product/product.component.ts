import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  template: `
    <div class="wrapper-content">
      <p>product works!</p>
      <p>snapshotId: {{ snapshotId }}</p>
      <p>activeId: {{ activeId }}</p>
      <p>urlStr: {{ urlStr }}</p>
      <div><a routerLink="../qwer">go to qwer</a></div>
    </div>
  `,
  styles: [],
})
export class ProductComponent implements OnInit {
  activeId = '';
  urlStr = '';

  // getters will recalculate on every render
  get snapshotId() {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

  constructor(private activatedRoute: ActivatedRoute) {
    console.log('activatedRoute', activatedRoute);
    const idSubscription: Subscription = activatedRoute.params
      .pipe(map((p) => p.id))
      .subscribe((res) => {
        // will automatically update
        this.activeId = res;
      });
    const url = activatedRoute.url
      .pipe(map((segments) => segments.join('')))
      .subscribe((res) => {
        this.urlStr = res;
      });
  }

  ngOnInit(): void {}
}
