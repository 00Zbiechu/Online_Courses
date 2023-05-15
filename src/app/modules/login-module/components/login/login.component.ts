import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import { Login } from './model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login;



  constructor(private loginService: LoginServiceService, private router: Router) {
    this.login = new Login();
  }

  authenticate() {
    this.loginService.authenticate(this.login)
      .subscribe(result => {
        localStorage.setItem('token', result.access_token);
        this.loginService.loginState();
        this.router.navigate(['/'])
      });
  }

}

