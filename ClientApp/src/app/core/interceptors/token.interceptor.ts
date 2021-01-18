import { Injectable } from '@angular/core';

import {
	HttpRequest,
	HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap, tap } from "rxjs/operators";

import { AuthService } from '../services/global/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;

  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) {}

  addAuthenticationToken(request) {
    const token: string = this.authService.getToken();
    if (!token) {
      return request;
    }

    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });    
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.authService.getToken();
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(request).pipe(
      catchError(err => {
        let url = request.url;

        if (url.includes("RefreshAccessToken") || url.includes("Authenticate")) {
          this.authService.logout();
        }

        if (err.status != 401) {
          return throwError(err);
        }

        if (this.refreshTokenInProgress) {
          return this.refreshTokenSubject.pipe(
            filter(result => result !== null),
            take(1),
            switchMap(() => next.handle(this.addAuthenticationToken(request)))
          );
        }
        else {
          this.refreshTokenInProgress = true;
          this.refreshTokenSubject.next(null);

          return this.authService.refreshAccessToken().pipe(
            switchMap((token: any) => {
              this.refreshTokenInProgress = false;
              this.refreshTokenSubject.next(token);

              return next.handle(this.addAuthenticationToken(request));
            }),
            catchError(err => {
              this.refreshTokenInProgress = false;
              this.authService.logout();

              return throwError(err);
            })
          );
        }
      })
    );
  }
}