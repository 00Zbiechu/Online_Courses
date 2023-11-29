import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPhoto } from '../../header-module/components/header/model/IPhoto';
import { Authentication } from '../components/login/model/Authentication';
import { Login } from '../components/login/model/Login';
import { Refresh } from '../components/login/model/Refresh';
import { UserData } from '../components/login/model/UserData';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private url = 'http://localhost:8080/api/users';

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private httpClient: HttpClient) { }

  authenticate(login: Login): Observable<Authentication> {
    return this.httpClient.post<Authentication>(this.url + '/authenticate', login);
  }

  refresh(refreshToken: Refresh): Observable<Authentication> {
    return this.httpClient.post<Authentication>(this.url + '/refresh-token', refreshToken);
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

  getUserDataFromToken(): UserData {
    const token = sessionStorage.getItem('token')! || localStorage.getItem('token')!;
    const decodeToken: any = jwt_decode(token);
    var userData = new UserData();
    userData.username = decodeToken.sub;
    userData.mail = decodeToken.mail;
    return userData;
  }

  getUserPhoto(): Observable<IPhoto> {
    return this.httpClient.get<IPhoto>(this.url + "/get-photo");
  }
}
