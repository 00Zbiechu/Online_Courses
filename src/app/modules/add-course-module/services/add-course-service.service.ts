import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from "../components/create-course-form/model/Course";

@Injectable({
  providedIn: 'root'
})
export class AddCourseServiceService {

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) {
  }

  addCourse(course: Course, file: File) {

    const endpointUrl = `${this.url}/add-course`;

    const formData = new FormData();
    formData.append('coursesDTO', JSON.stringify(course));
    formData.append('file', file);

    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });

    this.httpClient.post(endpointUrl, formData, { headers: headers })
      .subscribe(
        (response) => {
          console.log('Success:', response);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
