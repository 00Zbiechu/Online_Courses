import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourseForList } from '../../search-module/components/course-list/model/ICourseForList';
import { IAttachment } from '../components/owner-page/model/IAttachment';
import { ITopics } from '../components/owner-page/model/ITopics';

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

  getTopics(courseId: number): Observable<ITopics> {
    const params = new HttpParams().set('courseId', courseId.toString());
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

  getAttachment(courseId: number, topicId: number, fileId: number): Observable<IAttachment> {
    const params = new HttpParams()
      .set('courseId', courseId.toString())
      .set('topicId', topicId.toString())
      .set('fileId', fileId.toString());
    return this.httpClient.get<IAttachment>(`${this.url}/get-attachment`, { params });
  }
}
