import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss'],
})
export class RoutingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateByUrl(id: string) {
    // asolute path
    this.router.navigateByUrl(`routing/${id}`);
  }
  navigate(id: string) {
    this.router.navigate(['routing', id]);
  }
}
