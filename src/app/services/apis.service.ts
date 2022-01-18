import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  constructor(private http: HttpClient) {}

  postGetData(): Observable<any> {
    return this.http.post(
      `https://bds.oia.ntnu.edu.tw/api/v1/pt/menu-list?_locale=zh-tw`,
      {},
      httpOptions
    );
  }
}
