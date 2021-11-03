import { Component, OnInit } from '@angular/core';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  list = routes.map((r) => ({
    path: `/${r.path}`,
    name: r.path ? r.path : 'home',
  }));
  constructor() {}

  ngOnInit(): void {}
}
