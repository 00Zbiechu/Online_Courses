import { Component, Input, ViewEncapsulation } from '@angular/core';
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
export class VisitorPageComponent {

  @Input() topics: ITopic[];
  @Input() courseData: ICourseForList;
  attachement: IAttachment;
  dialogVisible: boolean = false;

  constructor(private courseService: CourseServiceService) {
  }

  getAttachment(courseId: number, topicId: number, fileId: number) {
    this.courseService.getAttachment(courseId, topicId, fileId).subscribe(result => {
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
}
