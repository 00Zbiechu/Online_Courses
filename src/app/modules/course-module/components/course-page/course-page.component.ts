import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/modules/login-module/components/login/model/UserData';
import { LoginServiceService } from 'src/app/modules/login-module/services/login-service.service';
import { ICourseForList } from 'src/app/modules/search-module/components/course-list/model/ICourseForList';
import { CourseServiceService } from '../../services/course-service.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {

  courseId: number;
  courseData: ICourseForList;
  userData: UserData;
  owner: boolean;

  constructor(private route: ActivatedRoute, private courseService: CourseServiceService, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.courseId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.courseService.getCourseData(Number(this.courseId)).subscribe(result => {
      this.courseData = result;
    });
    this.userData = this.loginService.getUserDataFromToken();
    this.checkIfLoggedUserIsOwner();
  }

  checkIfLoggedUserIsOwner(): boolean {
    let isLoggedIn: boolean = false;
    this.loginService.isLoggedIn.subscribe(result => {
      if (result == true) {
        isLoggedIn = true;
      }
    })

    if (isLoggedIn != false && this.userData != null && this.userData.username != null && this.courseData != null && this.userData.username == this.courseData.username) {
      return true;
    }

    return false;
  }
}
