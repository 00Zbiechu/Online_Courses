import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthentication } from '../components/register/model/IAuthentication';
import { Register } from '../components/register/model/Register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private url = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) { }

  registration(register: Register): Observable<IAuthentication> {
    return this.httpClient.post<IAuthentication>(this.url + '/register', register);
  }

  uploadPhoto(photo: FormData) {
    return this.httpClient.post(this.url + "/upload-photo", photo);
  }
}
