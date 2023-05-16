import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/modules/login-module/services/login-service.service';
import { HeaderServiceService } from '../../services/header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public loginService: LoginServiceService, private headerService: HeaderServiceService, private router: Router) {

  }


  logoutUser() {
    this.headerService.logout().subscribe(
      () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        this.loginService.logoutState();
        this.router.navigate(['/']);
        window.location.reload();
      },
      (error) => {
        console.error('Error during logout:', error);
      }
    );
  }






}
