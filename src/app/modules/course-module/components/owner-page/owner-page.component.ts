import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CourseServiceService } from '../../services/course-service.service';
import { IAttachment } from './model/IAttachment';
import { IParticipant } from './model/IParticipant';
import { ITopic } from './model/ITopic';

@Component({
  selector: 'app-owner-page',
  templateUrl: './owner-page.component.html',
  styleUrls: ['./owner-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OwnerPageComponent {

  @Input() courseId: number;
  @Input() topics: ITopic[];
  @Input() password: string;
  @Input() participants: IParticipant[];
  usernameNewParticipant: string;
  addNewParticipantDialog: boolean;
  attachement: IAttachment;
  dialogVisible: boolean = false;
  filesToUpload: File[] = [];
  topicForm: FormGroup;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '5',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter your topic content here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ]
  };

  constructor(private formBuilder: FormBuilder, private courseService: CourseServiceService) {
    this.topicForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      note: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(8000)]]
    });
  }

  onFilesSelected(event: any) {
    const files: FileList = event.files;
    if (files && files.length > 0) {
      this.filesToUpload = Array.from(files);
    }
  }

  addTopic(courseId: number) {
    if (this.topicForm.valid) {
      let topicData = this.topicForm.value;
      const formData: FormData = new FormData();
      formData.append('addTopicDTO', new Blob([JSON.stringify(topicData)], { type: 'application/json' }));

      if (this.filesToUpload) {
        for (const file of this.filesToUpload) {
          formData.append('files', file);
        }
      }

      this.courseService.addTopic(courseId, formData).subscribe(result => {
        this.topics = result.topics;
        this.topicForm.reset();
        this.filesToUpload = [];
      })
    }
  }

  deleteTopic(courseId: number, topicId: number) {
    this.courseService.deleteTopic(courseId, topicId).subscribe(result => {
      this.topics = result.topics;
    })
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

  deleteParticipant(userId: number) {
    this.courseService.deleteParticipant(this.courseId, userId).subscribe(result => {
      this.participants = result.participants;
    })
  }

  showAddNewParticipantDialog() {
    this.addNewParticipantDialog = true;
  }

  addCourseParticipant() {
    if (this.usernameNewParticipant != null && this.usernameNewParticipant.length > 3) {
      this.courseService.addCourseParticipant(this.courseId, this.usernameNewParticipant)
        .subscribe(result => {
          this.addNewParticipantDialog = false;
        });
    }
  }
}
