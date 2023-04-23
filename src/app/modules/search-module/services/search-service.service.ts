
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private httpClient: HttpClient) {

  }

  public getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('http://localhost:8080/api/courses');
  }


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
