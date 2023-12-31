import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourseForList } from '../../search-module/components/course-list/model/ICourseForList';

@Injectable({
  providedIn: 'root'
})
export class ParticipantServiceService {

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) { }

  getCoursesWhereUserIsParticipant(): Observable<ICourseForList[]> {
    return this.httpClient.get<ICourseForList[]>(this.url + '/get-courses-where-user-is-participant');
  }
}
