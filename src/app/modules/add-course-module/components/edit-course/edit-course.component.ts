import { Component, Input } from '@angular/core';
import { CoursesForEdit } from './model/CoursesForEdit';
import { CourseForEdit } from './model/CourseForEdit';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent {

  @Input() courses: CourseForEdit[];

}
