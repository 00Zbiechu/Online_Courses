
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) {

  }

  getCountOfCourses(){
    const url = `${this.url}/how-many-courses`;
    return this.httpClient.get<number>(url);
  }

  getCourses(page: number): Observable<Page> {
    const url = `${this.url}/get-course-page`;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', '6');
    return this.httpClient.get<Page>(url, { params });
  }


}

export interface Page {
  content: Course[]
  pageable: string
  last: boolean
  totalElements: number
  totalPages: number
  size: number
  number: number
  sort: Sort
  first: boolean
  numberOfElements: number
  empty: boolean
}

export interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}


export interface Course {
  id: number
  title: string
  startData: string
  endData: string
  topic: string
  description: string
  image: string
}
