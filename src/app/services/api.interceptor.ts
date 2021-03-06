import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const isLoggedIn = false;

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private transferState: TransferState) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const key = makeStateKey(req.url);
    const storedResponse: string | null =
      this.transferState.get(key, null) || null;

    if (storedResponse) {
      const response = new HttpResponse({ body: storedResponse, status: 200 });
      // this.transferState.remove(key);
      return of(response);
    }

    let newReq = req.clone();
    if (isLoggedIn) {
      newReq = req.clone({
        setHeaders: {
          Authorization: `Bearer your_token`,
        },
      });
    }

    return next.handle(newReq).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body.header && event.body.header.status !== 'OK') {
            throw new HttpErrorResponse({
              error: 'your error',
              headers: event.headers,
              status: event.body?.header?.status || event.status,
              statusText: 'Warning',
              url: event.url || undefined,
            });
          } else {
            // return event.body.body;
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
