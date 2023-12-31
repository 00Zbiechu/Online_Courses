import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { faBookmark, faClock, faList, faScroll, faUser } from '@fortawesome/free-solid-svg-icons';
import { ICourseForList } from 'src/app/modules/search-module/components/course-list/model/ICourseForList';
import { ParticipantServiceService } from '../../services/participant-service.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ParticipantComponent implements OnInit {

  faList = faList;
  faUser = faUser;
  faClock = faClock;
  faBookmark = faBookmark;
  faScroll = faScroll;

  coursesForList: ICourseForList[];

  constructor(private participantService: ParticipantServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getCoursesWhereUserIsParticipant();
  }

  getCoursesWhereUserIsParticipant() {
    this.participantService.getCoursesWhereUserIsParticipant().subscribe(result => {
      this.coursesForList = result;
    })
  }

  isPhotoAvailable(photo: any): boolean {
    return photo && photo.length > 0;
  }

  viewCourseDetails(courseId: number) {
    this.router.navigate(['/course', courseId]);
  }
}
