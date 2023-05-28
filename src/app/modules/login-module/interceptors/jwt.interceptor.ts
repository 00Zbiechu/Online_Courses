import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Authentication } from '../components/login/model/Authentication';
import { LoginServiceService } from '../services/login-service.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    const accessToken = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      this.loginService.loginState();
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {

          const accessToken = localStorage.getItem('token') || sessionStorage.getItem('token');
          const refreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');

          if (accessToken == null || refreshToken == null) {
            this.router.navigate(['/login']);
            return next.handle(request);
          }

          return this.loginService.refresh(new Authentication(accessToken!, refreshToken!)).pipe(
            switchMap((tokens) => {
              localStorage.setItem('token', tokens.access_token);
              localStorage.setItem('refreshToken', tokens.refresh_token);
              sessionStorage.removeItem('token');
              sessionStorage.removeItem('refreshToken');

              request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${tokens.access_token}`
                }
              });

              return next.handle(request);
            }),
            catchError(() => {
              this.router.navigate(['/login']);
              return next.handle(request);
            })
          );
        }

        return throwError(error);
      })
    );
  }
}