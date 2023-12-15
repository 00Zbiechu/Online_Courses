import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthentication } from '../components/register/model/IAuthentication';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private url = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) { }

  registration(formData: FormData): Observable<IAuthentication> {
    return this.httpClient.post<IAuthentication>(this.url + '/register', formData);
  }
}
