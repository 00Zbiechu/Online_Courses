import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CoursesForCalendar } from "../components/calendar/model/CoursesForCalendar";
import { CoursesForEdit } from "../components/edit-course/model/CoursesForEdit"
import { Course } from "../components/create-course-form/model/Course";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AddCourseServiceService {

  private fileNameFromResponse: string;

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient, private router: Router) {
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
      this.router.navigate(['/'])
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


  getCoursesForCalendar(): Observable<CoursesForCalendar> {
    const url = `${this.url}/get-course-data-for-calendar`;
    return this.httpClient.get<CoursesForCalendar>(url);
  }

  getCoursesForEdit(): Observable<CoursesForEdit> {
    const url = `${this.url}/get-course-data-for-edit`;
    return this.httpClient.get<CoursesForEdit>(url);
  }

  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + ".jpg";
  }


}
