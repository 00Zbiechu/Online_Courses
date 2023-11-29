import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ITopic } from 'src/app/modules/search-module/components/sidebar/model/ITopic';
import { AddCourseServiceService } from '../../services/add-course-service.service';
import { ICourseForEdit } from './model/ICourseForEdit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [DatePipe]
})
export class EditCourseComponent implements OnInit {

  @Input() courses: ICourseForEdit[];

  registerForm: FormGroup;
  topics: ITopic[];
  fileToUpload: File | null = null;
  edit: boolean;

  ngOnInit(): void {
    this.topics = [
      { name: 'Programming course' },
      { name: 'Math course' }
    ];
  }

  constructor(private addCourseService: AddCourseServiceService, private confirmationService: ConfirmationService, private formBuilder: FormBuilder, private datePipe: DatePipe, private router: Router) {
    this.registerForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      topic: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup): null | { passwordsDontMatch: boolean } {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordsDontMatch: true });
      return { passwordsDontMatch: true };
    } else {
      confirmPassword?.setErrors(null);
      return null;
    }
  }

  delete(event: Event, courseId: number) {
    this.confirmationService.confirm({
      target: event.target!,
      message: "Are you sure that you want delete course?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.addCourseService.deleteCourse(courseId).subscribe();
        window.location.reload();
      },
      reject: () => {
      }
    });
  }

  editCourse(courseId: number) {
    if (this.registerForm.valid) {
      this.transformStartDateFormat();
      this.transformEndDateFormat();
      const userData = this.registerForm.value;
      this.addCourseService.editCourse(courseId, userData).subscribe(result => {
        let courseId = result.id;
        this.saveCoursePhoto(courseId);
        window.location.reload();
      });
    };
  };

  showEditDialog() {
    this.edit = true;
  }

  onFileSelected(event: any) {
    const files: FileList = event.files;
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    }
  }

  saveCoursePhoto(courseId: number) {
    if (this.fileToUpload) {
      const formData: FormData = new FormData();
      formData.append('courseId', courseId.toString());
      formData.append('photo', this.fileToUpload);
      this.addCourseService.uploadPhoto(formData).subscribe();
    }
  }

  transformStartDateFormat() {
    if (this.registerForm.value.startDate !== null) {
      this.registerForm.value.startDate = this.datePipe.transform(this.registerForm.value.startDate, 'yyyy-MM-dd')!;
    }
  }

  transformEndDateFormat() {
    if (this.registerForm.value.endDate !== null) {
      this.registerForm.value.endDate = this.datePipe.transform(this.registerForm.value.endDate, 'yyyy-MM-dd')!;
    }
  }

  viewCourseDetails(courseId: number) {
    this.router.navigate(['/course', courseId]);
  }
}
