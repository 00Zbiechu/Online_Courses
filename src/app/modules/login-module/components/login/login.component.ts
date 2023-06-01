import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderServiceService } from 'src/app/modules/header-module/services/header-service.service';
import { LoginServiceService } from '../../services/login-service.service';
import { Login } from './model/Login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login;
  rememberMe: boolean = false;


  constructor(private loginService: LoginServiceService, private headerService: HeaderServiceService, private router: Router) {
    this.login = new Login();
  }


  authenticate() {
    this.loginService.authenticate(this.login)
      .subscribe(result => {

        if (this.rememberMe) {
          // Set token in localStorage
          localStorage.setItem('token', result.access_token);
          localStorage.setItem('refreshToken', result.refresh_token);
        } else {
          // Set token in sessionStorage
          sessionStorage.setItem('token', result.access_token);
          sessionStorage.setItem('refreshToken', result.refresh_token);
        }


        this.loginService.loginState();
        this.router.navigate(['/']).then(() => {
          window.location.reload();

        });
      })
  }








}

