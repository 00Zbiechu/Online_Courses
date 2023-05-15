import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/modules/login-module/services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public loginService: LoginServiceService) {

  }



}
