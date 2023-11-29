import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Refresh } from 'src/app/modules/login-module/components/login/model/Refresh';
import { LoginServiceService } from '../../modules/login-module/services/login-service.service';

@Injectable()
export class ForbiddenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private loginService: LoginServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {

          console.log("Logout")

          const accessToken = localStorage.getItem('token') || sessionStorage.getItem('token');
          const refreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');

          if (accessToken == null || refreshToken == null) {
            this.loginService.logoutState();
            this.router.navigate(['/login']);
            return next.handle(request);
          } else {
            const oldRefreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');

            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('refreshToken');

            this.loginService.refresh(new Refresh(oldRefreshToken!)).subscribe(result => {
              localStorage.setItem('token', result.accessToken);
              localStorage.setItem('refreshToken', result.refreshToken);
              window.location.reload();
            })

            // Should redirect to login page if request error - does not work

            // this.loginService.refresh(new Refresh(oldRefreshToken!)).pipe(
            //   switchMap((tokens) => {
            // localStorage.setItem('token', tokens.accessToken);
            // localStorage.setItem('refreshToken', tokens.refreshToken);
            // console.log("Set new refreshed token")
            //     return next.handle(request);
            //   }),
            //   catchError(() => {
            //     console.log("Refresh error -> login page")
            //     this.loginService.logoutState();
            //     this.router.navigate(['/login']);
            //     return next.handle(request);
            //   })
            // ).subscribe();
          }
        }
        return throwError(error);
      })
    );
  }
}
