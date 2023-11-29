import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './error/error-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-trainig-project';

  messages: any[] = [];

  constructor(private errorHandlerService: ErrorHandlerService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.errorHandlerService.setMessageService(this.messageService);
  }
}
