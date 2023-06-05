import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/modules/login-module/services/login-service.service';
import { AddCourseServiceService } from '../../services/add-course-service.service';
import { Course } from "./model/Course";

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss']
})
export class CreateCourseFormComponent {

  course: Course;
  file: File;


  constructor(private addCourseService: AddCourseServiceService, private loginService: LoginServiceService) {
    this.course = new Course();
  }

  onCourseCreate() {
    this.course.username = this.loginService.getUserDataFromToken();
    this.addCourseService.addCourse(this.course, this.file);
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

}
