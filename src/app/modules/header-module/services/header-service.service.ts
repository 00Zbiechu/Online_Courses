import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  private url = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  logout() {
    const url = `${this.url}/logout`;
    return this.http.post(url, {});
  }
}
