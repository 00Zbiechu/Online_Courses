import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../../modules/login-module/services/login-service.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginServiceService) { }

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
    return next.handle(request);
  }
}
