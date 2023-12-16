import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CourseServiceService } from '../../services/course-service.service';
import { ITopic } from './model/ITopic';

@Component({
  selector: 'app-owner-page',
  templateUrl: './owner-page.component.html',
  styleUrls: ['./owner-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OwnerPageComponent implements OnInit {

  @Input() courseId: number;
  topics: ITopic[];

  filesToUpload: File[] | null = null;
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

  ngOnInit(): void {
    this.getTopics(this.courseId);
  }

  onFileSelected(event: any) {
    this.filesToUpload = event.files;
  }

  getTopics(courseId: number) {
    this.courseService.getTopics(courseId).subscribe(result => {
      this.topics = result.topics;
    });
  }

  addTopic(courseId: number) {
    if (this.topicForm.valid) {
      let topicData = this.topicForm.value;
      const formData: FormData = new FormData();
      formData.append('addTopicDTO', new Blob([JSON.stringify(topicData)], { type: 'application/json' }));

      //TODO: Does not work
      if (this.filesToUpload) {
        for (const file of this.filesToUpload) {
          formData.append('files', file);
        }
      }

      this.courseService.addTopic(courseId, formData).subscribe(result => {
        this.topics = result.topics;
      })
    }
  }
}
