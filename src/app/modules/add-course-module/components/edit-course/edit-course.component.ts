import { Component, OnInit } from '@angular/core';
import { AddCourseServiceService } from '../../services/add-course-service.service';
import { CourseForCalendar } from '../calendar/model/CourseForCalendar';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  courses: CourseForCalendar[];

  constructor(private addCourseService: AddCourseServiceService) {

  }


  ngOnInit(): void {
    this.fetchCourses();
  }


  fetchCourses(): void {

    this.addCourseService.getCourses()
      .subscribe((result: CourseForCalendar[]) => {

        this.courses = result;

      });
  }

}
