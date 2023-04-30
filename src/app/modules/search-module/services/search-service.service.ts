
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from "../components/course-list/model/Page";

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) {

  }

  getCountOfCourses() {
    const url = `${this.url}/how-many-courses`;
    return this.httpClient.get<number>(url);
  }

  getCourses(page: number, size: number): Observable<Page> {
    const url = `${this.url}/get-course-page`;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.httpClient.get<Page>(url, { params });
  }


}
