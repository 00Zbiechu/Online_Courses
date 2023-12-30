import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/modules/login-module/components/login/model/UserData';
import { LoginServiceService } from 'src/app/modules/login-module/services/login-service.service';
import { ICourseForList } from 'src/app/modules/search-module/components/course-list/model/ICourseForList';
import { CourseServiceService } from '../../services/course-service.service';
import { IParticipant } from '../owner-page/model/IParticipant';
import { ITopic } from '../owner-page/model/ITopic';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {

  courseId: number;
  courseData: ICourseForList;
  topics: ITopic[];
  userData: UserData;
  accessGranted: boolean;
  password: string;
  passwordPanel: boolean;

  constructor(private route: ActivatedRoute, private courseService: CourseServiceService, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.courseId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.courseService.getCourseData(Number(this.courseId), this.password).subscribe(result => {
      this.courseData = result;
      this.passwordPanel = false;
      this.accessGranted = true;
    },
      error => {
        this.passwordPanel = true;
        this.accessGranted = false;
      });

    this.getTopics(this.courseId, this.password);
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

  getTopics(courseId: number, password: string) {
    this.courseService.getTopics(courseId, password).subscribe(result => {
      this.topics = result.topics;
    });
  }

  sendPassword() {
    this.courseId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.courseService.getCourseData(Number(this.courseId), this.password).subscribe(result => {
      this.courseData = result;
      this.passwordPanel = false;
      this.accessGranted = true;
    },
      error => {
        this.passwordPanel = true;
        this.accessGranted = false;
      });

    this.getTopics(this.courseId, this.password);
    this.userData = this.loginService.getUserDataFromToken();
    this.checkIfLoggedUserIsOwner();
  }
}
