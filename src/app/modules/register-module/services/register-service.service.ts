import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authentication } from '../components/register/model/Authentication';
import { Register } from '../components/register/model/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private url = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) { }


  registration(register: Register) {
    return this.httpClient.post<Authentication>(this.url + '/register', register);
  }
}
