import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  private url = 'http://localhost:8080/api/users/logout';

  constructor(private http: HttpClient) { }

  logout(): Observable<void> {
    return this.http.post<void>(this.url, {});
  }


}
