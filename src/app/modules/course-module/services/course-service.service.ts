import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourseForList } from '../../search-module/components/course-list/model/ICourseForList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) { }

  getCourseData(courseId: number): Observable<ICourseForList> {
    const params = new HttpParams().set('courseId', courseId.toString());
    return this.httpClient.get<ICourseForList>(this.url + '/get-course', { params });
  }
}
