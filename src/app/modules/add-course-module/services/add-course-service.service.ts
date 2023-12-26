import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from "../components/create-course-form/model/Course";
import { ICourseForAdmin } from '../components/create-course/model/ICourseForAdmin';
import { ICoursesForAdmin } from '../components/create-course/model/ICoursesForAdmin';


@Injectable({
  providedIn: 'root'
})
export class AddCourseServiceService {

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) { }

  editCourse(courseId: number, course: Course): Observable<ICourseForAdmin> {
    course.id = courseId;
    return this.httpClient.post<ICourseForAdmin>(this.url + '/edit-course', course);
  }

  addCourse(course: Course): Observable<ICourseForAdmin> {
    return this.httpClient.post<ICourseForAdmin>(this.url + '/add-course', course);
  }

  uploadPhoto(photo: FormData) {
    return this.httpClient.post(this.url + "/upload-photo", photo);
  }

  getCoursesForAdminPage(): Observable<ICoursesForAdmin> {
    const url = `${this.url}/get-courses-for-user`;
    return this.httpClient.get<ICoursesForAdmin>(url);
  }

  deleteCourse(courseId: number) {
    const url = `${this.url}/delete-course`;

    let queryParams = new HttpParams();
    queryParams = queryParams.append("courseId", courseId);

    return this.httpClient.delete<ICoursesForAdmin>(url, { params: queryParams });
  }

  getCourseData(courseId: number): Observable<Course> {
    const params = new HttpParams().set('courseId', courseId.toString());
    return this.httpClient.get<Course>(this.url + '/get-course', { params });
  }
}