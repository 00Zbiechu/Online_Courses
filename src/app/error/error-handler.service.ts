import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private messageService: MessageService;

  setMessageService(messageService: MessageService): void {
    this.messageService = messageService;
  }

  handleHttpError(error: HttpErrorResponse): void {
    error.error.errorList.forEach((item: { field: any; errorCodes: any; }) => {
      const errorMessage = `${item.field}: ${item.errorCodes}`;
      this.messageService.add({ severity: 'error', summary: 'Error:', detail: errorMessage });
    });
  }
}
