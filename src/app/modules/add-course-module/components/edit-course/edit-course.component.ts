import { Component, OnInit } from '@angular/core';
import { AddCourseServiceService } from '../../services/add-course-service.service';
import { CoursesForEdit } from './model/CoursesForEdit';
import { CourseForEdit } from './model/CourseForEdit';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  courses: CourseForEdit[];

  constructor(private addCourseService: AddCourseServiceService) {

  }


  ngOnInit(): void {
    this.fetchCourses();
  }


  fetchCourses(): void {

    this.addCourseService.getCoursesForEdit()
      .subscribe((result: CoursesForEdit) => {

        this.courses = result.courseForEditList;

      });
  }

}
