import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICoursePage } from '../components/course-list/model/ICoursePage';
import { IPaginationForCourseList } from '../components/course-list/model/IPaginationForCourseList';
import { Search } from "../components/sidebar/model/Search";

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) { }

  getCourses(paginationParams: IPaginationForCourseList): Observable<ICoursePage> {
    const url = `${this.url}/get-course-page`;
    return this.httpClient.post<ICoursePage>(url, paginationParams);
  }

  searchForCourses(searchForm: Search): Observable<ICoursePage> {
    const url = `${this.url}/search-for-courses`;
    const headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post<ICoursePage>(url, searchForm, { headers })
  }
}
