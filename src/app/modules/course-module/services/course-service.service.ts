import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourseForList } from '../../search-module/components/course-list/model/ICourseForList';
import { IAttachment } from '../components/owner-page/model/IAttachment';
import { IParticipants } from '../components/owner-page/model/IParticipants';
import { IQuestions } from '../components/owner-page/model/IQuestions';
import { IQuizUser } from '../components/owner-page/model/IQuizUser';
import { ITopics } from '../components/owner-page/model/ITopics';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private url = 'http://localhost:8080/api/courses';

  private quizUrl = 'http://localhost:8080/api/question';

  private quizUserUrl = 'http://localhost:8080/api/quiz-user';


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
    return this.httpClient.post(`${this.url}/add-course-participant?courseId=` + courseId + `&username=` + username, null);
  }

  getQuestionListForCourse(courseTitle: string): Observable<IQuestions> {
    const params = new HttpParams()
      .set('courseTitle', courseTitle);
    return this.httpClient.get<IQuestions>(`${this.quizUrl}/question-list`, { params })
  }

  deleteQuestion(courseTitle: string, title: string): Observable<IQuestions> {
    const params = new HttpParams()
      .set('courseTitle', courseTitle)
      .set('title', title);
    return this.httpClient.delete<IQuestions>(`${this.quizUrl}/delete-question`, { params })
  }

  addQuestion(formData: FormData, courseTitle: string): Observable<IQuestions> {
    const params = new HttpParams()
      .set('courseTitle', courseTitle);
    return this.httpClient.post<IQuestions>(this.quizUrl + '/add-question', formData, { params });
  }

  getQuizUserResult(username: string, courseTitle: string): Observable<IQuizUser> {
    const params = new HttpParams()
      .set('courseTitle', courseTitle)
      .set('username', username);
    return this.httpClient.get<IQuizUser>(this.quizUserUrl + '/get-result', { params })
  }
}