import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsernameAndEmailForEachToken } from '../../header-module/components/header/model/UsernameAndEmailForEachToken';
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

    //Delete local storage
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');

    //Delete session storage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refreshToken');

    this._isLoggedIn.next(false);
  }


  getUsernameAndEmailByToken(): Observable<UsernameAndEmailForEachToken> {
    const url = `${this.url}/get-username-and-email-by-token`;
    const token = localStorage.getItem('token');
    const params = new HttpParams().set('token', token ? token.toString() : '');
    return this.httpClient.get<UsernameAndEmailForEachToken>(url, { params });
  }




}
