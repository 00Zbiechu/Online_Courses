import { Component, ViewEncapsulation } from '@angular/core';
import { AddCourseServiceService } from '../../services/add-course-service.service';
import { ICourseForAdmin } from './model/ICourseForAdmin';
import { ICoursesForAdmin } from './model/ICoursesForAdmin';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CreateCourseComponent {

  courses: ICourseForAdmin[];

  constructor(private addCourseService: AddCourseServiceService) { }

  ngOnInit() {
    this.getCoursesForAdminPage();
  }

  getCoursesForAdminPage() {
    this.addCourseService.getCoursesForAdminPage().subscribe(
      (result: ICoursesForAdmin) => {
        this.courses = result.courseForUserList;
        console.log(this.courses);
      }
    );
  }
}
