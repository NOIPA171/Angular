import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-test-ssr',
  templateUrl: './test-ssr.component.html',
  styleUrls: ['./test-ssr.component.scss'],
})
export class TestSSRComponent implements OnInit {
  data?: any;
  constructor(private apiService: ApisService) {}

  ngOnInit(): void {
    this.apiService.postGetData().subscribe({
      next: (res) => {
        console.log('res', res);
        this.data = res;
      },
      error: (err) => {
        console.log('an error occurred', err);
      },
    });
  }
}
