import { Component } from '@angular/core';
import { Course } from "./model/Course";
import { AddCourseServiceService } from '../../services/add-course-service.service';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss']
})
export class CreateCourseFormComponent {

  course: Course;
  file: File;


  constructor(private addCourseService: AddCourseServiceService) {
    this.course = new Course();
  }

  onCourseCreate() {
    this.addCourseService.addCourse(this.course, this.file);
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }


}
