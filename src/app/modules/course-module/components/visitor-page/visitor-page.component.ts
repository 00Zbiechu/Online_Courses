import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UserData } from 'src/app/modules/login-module/components/login/model/UserData';
import { LoginServiceService } from 'src/app/modules/login-module/services/login-service.service';
import { ICourseForList } from 'src/app/modules/search-module/components/course-list/model/ICourseForList';
import { CourseServiceService } from '../../services/course-service.service';
import { IAttachment } from '../owner-page/model/IAttachment';
import { ITopic } from '../owner-page/model/ITopic';

@Component({
  selector: 'app-visitor-page',
  templateUrl: './visitor-page.component.html',
  styleUrls: ['./visitor-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VisitorPageComponent implements OnInit {

  @Input() topics: ITopic[];
  @Input() courseData: ICourseForList;
  @Input() password: string;
  attachement: IAttachment;
  dialogVisible: boolean = false;
  userData: UserData;

  constructor(private courseService: CourseServiceService, private loginService: LoginServiceService) {
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getAttachment(courseId: number, topicId: number, fileId: number) {
    this.courseService.getAttachment(courseId, topicId, fileId, this.password).subscribe(result => {
      this.attachement = result;
      this.dialogVisible = true;
      this.generatePdf();
    })
  }

  isAttachmentImage(): boolean {
    if (this.attachement.type != null && this.attachement.type.startsWith("image")) {
      return true;
    }
    return false;
  }

  generatePdf() {
    if (this.attachement.type != null && !this.attachement.type.startsWith("image")) {
      const byteArray = new Uint8Array(atob(this.attachement.data).split('').map(char => char.charCodeAt(0)));
      const blob: Blob = new Blob([byteArray], { type: 'application/pdf' });
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl);
    }
  }

  getUserData() {
    this.userData = this.loginService.getUserDataFromToken();
  }
}
