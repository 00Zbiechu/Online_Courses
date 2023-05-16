import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Authentication } from '../components/login/model/Authentication';
import { Login } from '../components/login/model/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  private url = 'http://localhost:8080/api/users';

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private httpClient: HttpClient) { }


  authenticate(login: Login) {
    return this.httpClient.post<Authentication>(this.url + '/authenticate', login);
  }

  refresh(authentication: Authentication) {
    return this.httpClient.post<Authentication>(this.url + '/refresh-token', authentication);
  }

  loginState() {
    this._isLoggedIn.next(true);
  }

  logoutState() {
    this._isLoggedIn.next(false);
  }

}
