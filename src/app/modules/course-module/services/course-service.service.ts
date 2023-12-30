import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourseForList } from '../../search-module/components/course-list/model/ICourseForList';
import { IAttachment } from '../components/owner-page/model/IAttachment';
import { IParticipants } from '../components/owner-page/model/IParticipants';
import { ITopics } from '../components/owner-page/model/ITopics';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) { }

  getCourseData(courseId: number, password: string): Observable<ICourseForList> {
    const params = new HttpParams()
      .set('courseId', courseId.toString())
      .set('password', password);

    return this.httpClient.get<ICourseForList>(this.url + '/get-course', { params });
  }

  getTopics(courseId: number, password: string): Observable<ITopics> {
    const params = new HttpParams()
      .set('courseId', courseId.toString())
      .set('password', password);

    return this.httpClient.get<ITopics>(this.url + '/get-topics', { params });
  }

  addTopic(courseId: number, formData: FormData): Observable<ITopics> {
    const params = new HttpParams().set('courseId', courseId.toString());
    return this.httpClient.post<ITopics>(this.url + '/add-topic', formData, { params });
  }

  deleteTopic(courseId: number, topicId: number): Observable<ITopics> {
    const params = new HttpParams()
      .set('courseId', courseId.toString())
      .set('topicId', topicId.toString());

    return this.httpClient.delete<ITopics>(`${this.url}/delete-topic`, { params });
  }

  getAttachment(courseId: number, topicId: number, fileId: number, password: string): Observable<IAttachment> {
    const params = new HttpParams()
      .set('courseId', courseId.toString())
      .set('topicId', topicId.toString())
      .set('fileId', fileId.toString())
      .set('password', password);
    return this.httpClient.get<IAttachment>(`${this.url}/get-attachment`, { params });
  }

  getCourseParticipants(courseId: number): Observable<IParticipants> {
    const params = new HttpParams()
      .set('courseId', courseId.toString());
    return this.httpClient.get<IParticipants>(`${this.url}/get-course-participants`, { params });
  }

  deleteParticipant(courseId: number, userId: number): Observable<IParticipants> {
    const params = new HttpParams()
      .set('courseId', courseId.toString())
      .set('userId', userId.toString());
    return this.httpClient.delete<IParticipants>(`${this.url}/delete-course-participant`, { params });
  }

  addCourseParticipant(courseId: number, username: string) {
    const body = new HttpParams()
      .set('courseId', courseId.toString())
      .set('username', username);

    return this.httpClient.post(`${this.url}/add-course-participant`, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
}
