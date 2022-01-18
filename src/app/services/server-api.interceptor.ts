import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { makeStateKey, TransferState } from '@angular/platform-browser';

@Injectable()
export class ServerApiInterceptor implements HttpInterceptor {
  constructor(private transferState: TransferState) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body.header?.status && event.body.header.status !== 'OK') {
            throw new HttpErrorResponse({
              error: 'your error',
              headers: event.headers,
              status: event.body?.header?.status || event.status,
              statusText: 'Warning',
              url: event.url || undefined,
            });
          } else {
            this.transferState.set(makeStateKey(req.url), event.body);
            return event;
          }
        }
        return event;
      }),
      catchError((err) => {
        console.warn('an error has occurred', err);
        return throwError(err);
      })
    );
  }
}
