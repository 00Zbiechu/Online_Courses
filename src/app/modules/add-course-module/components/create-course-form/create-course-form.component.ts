import { Component } from '@angular/core';
import { AddCourseServiceService } from '../../services/add-course-service.service';
import { CalendarComponent } from '../calendar/calendar.component';
import { Course } from "./model/Course";

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss']
})
export class CreateCourseFormComponent {

  course: Course;
  file: File;


  constructor(private addCourseService: AddCourseServiceService, private calendar: CalendarComponent) {
    this.course = new Course();
  }

  onCourseCreate() {
    this.addCourseService.addCourse(this.course, this.file);
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  // reloadCurrentPage() {
  //   this.calendar.ngOnInit();
  // }

}
