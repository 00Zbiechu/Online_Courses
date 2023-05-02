import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Course } from "../components/create-course-form/model/Course";


@Injectable({
  providedIn: 'root'
})
export class AddCourseServiceService {

  private fileNameFromResponse: string;

  private url = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) {
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


  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + ".jpg";
  }


}
