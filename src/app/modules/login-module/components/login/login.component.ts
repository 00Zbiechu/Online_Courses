import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private loginService: LoginServiceService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  authenticate() {

    this.loginService.authenticate(this.loginForm.value)
      .subscribe(result => {

        if (this.loginForm.value.rememberMe[0] == "Remember me") {
          localStorage.setItem('token', result.accessToken);
          localStorage.setItem('refreshToken', result.refreshToken);
        } else {
          sessionStorage.setItem('token', result.accessToken);
          sessionStorage.setItem('refreshToken', result.refreshToken);
        }

        this.loginService.loginState();
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      })
  }
}

