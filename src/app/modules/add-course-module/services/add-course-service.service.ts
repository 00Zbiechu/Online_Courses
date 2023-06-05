import { HttpClient, HttpParams, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginServiceService } from '../../login-module/services/login-service.service';
import { Course } from "../components/create-course-form/model/Course";
import { CoursesForAdmin } from '../components/create-course/model/CoursesForAdmin';


@Injectable({
  providedIn: 'root'
})
export class AddCourseServiceService {

  private fileNameFromResponse: string;

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient, private loginService: LoginServiceService) {
  }

  addCourse(course: Course, image: File) {

    return this.httpClient.post<Course>(this.url + '/add-course', course).pipe(
      catchError((error) => {
        console.log(error);
        return throwError('Something went wrong');
      })
    ).subscribe(result => {
      this.fileNameFromResponse = result.image;
      this.uploadImage(image);
      window.location.reload();
    });
  }


  uploadImage(imageToSave: File) {

    const imageFormData = new FormData();
    imageFormData.append('file', imageToSave, this.fileNameFromResponse);


    this.httpClient.post(this.url + '/upload-file', imageFormData).pipe(
      catchError((error) => {
        console.log(error);
        return throwError('Something went wrong');
      })
    ).subscribe(result => {
      console.log("Ok")
    });

  }

  getCoursesForAdminPage(): Observable<CoursesForAdmin> {
    const url = `${this.url}/get-course-data-for-admin`;
    const params = new HttpParams().set('username', this.loginService.getUserDataFromToken());
    return this.httpClient.get<CoursesForAdmin>(url, { params });
  }

  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + ".jpg";
  }


}