import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorHandlerService } from 'src/app/error/error-handler.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private errorHandlerService: ErrorHandlerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorHandlerService.handleHttpError(error);
        return throwError(error);
      })
    );
  }
}
