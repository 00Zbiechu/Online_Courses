import { Component, OnInit } from '@angular/core';
import { AddCourseServiceService } from '../../services/add-course-service.service';
import { CourseForAdmin } from './model/CourseForAdmin';
import { CoursesForAdmin } from './model/CoursesForAdmin';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  courses: CourseForAdmin[];

  ngOnInit() {
    this.getCoursesForAdminPage();
  }

  constructor(private addCourseService: AddCourseServiceService) {

  }

  getCoursesForAdminPage() {
    this.addCourseService.getCoursesForAdminPage().subscribe((result: CoursesForAdmin) => {
      this.courses = result.courseForAdminList;
    })
  }

}
