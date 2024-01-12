import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserData } from 'src/app/modules/login-module/components/login/model/UserData';
import { LoginServiceService } from 'src/app/modules/login-module/services/login-service.service';
import { HeaderServiceService } from '../../services/header-service.service';
import { IPhoto } from './model/IPhoto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  userData: UserData | null;
  userPhoto: Uint8Array | null;
  items: MenuItem[];

  constructor(public loginService: LoginServiceService, private headerService: HeaderServiceService, private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Course',
        icon: 'pi pi-fw pi-list',
        items: [
          { label: 'Course list', icon: 'pi pi-fw pi-list', routerLink: "/" },
          { label: 'Manage courses', icon: 'pi pi-fw pi-plus', routerLink: "/create" },
          { label: 'Observed courses', icon: 'pi pi-fw pi-user', routerLink: "/participation" },
        ]
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        items: [
          { label: 'Change user data', icon: 'pi pi-fw pi-user-edit', routerLink: "/" },
          { label: 'Preferences', icon: 'pi pi-fw pi-sync', routerLink: "/" }
        ]
      },
      {
        label: 'Options',
        icon: 'pi pi-cog',
        items: [
          { label: 'Sing-in', icon: 'pi pi-fw pi-check-square', routerLink: "/login", command: () => this.logoutUser() },
          { label: 'Sign-up', icon: 'pi pi-fw pi-sync', routerLink: "/register" },
          { label: 'Logout', icon: 'pi pi-fw pi-times', command: () => this.logoutUser() },
        ]
      }
    ];

    this.userData = this.loginService.getUserDataFromToken();
    this.getUserPhoto();
  }

  logoutUser() {
    this.headerService.logout().subscribe(
      () => {
        this.userData = null;
        this.userPhoto = null;
        this.loginService.logoutState();
      },
      (error) => {
        console.error('Error during logout:', error);
      }
    );
  }

  isUserDataSet(): boolean {
    if (this.userData != null && this.userData.username != null && this.userData.mail != null) {
      return true;
    }
    return false;
  }

  getUserPhoto() {
    this.loginService.getUserPhoto().subscribe((result: IPhoto) => {
      this.userPhoto = result.photo;
    })
  }

  isUserPhotoSet(): boolean {
    if (this.userPhoto != null) {
      return true;
    }
    return false;
  }
}
