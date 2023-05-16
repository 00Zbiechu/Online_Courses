import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
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

    // Pobierz access token z lokalnego składowania
    const accessToken = localStorage.getItem('token');

    // Dodaj nagłówek Bearer z access tokenem do żądania
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
        if (error.status === 403) {
          this.router.navigate(['/login'])
        }

        return throwError(error);
      })
    );
  }
}
