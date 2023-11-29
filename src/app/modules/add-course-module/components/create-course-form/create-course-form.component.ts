import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITopic } from 'src/app/modules/search-module/components/sidebar/model/ITopic';
import { AddCourseServiceService } from '../../services/add-course-service.service';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [DatePipe]
})
export class CreateCourseFormComponent implements OnInit {

  registerForm: FormGroup;
  topics: ITopic[];
  fileToUpload: File | null = null;
  add: boolean;

  ngOnInit(): void {
    this.topics = [
      { name: 'Programming course' },
      { name: 'Math course' }
    ];
  }

  constructor(private addCourseService: AddCourseServiceService, private formBuilder: FormBuilder, private router: Router, private datePipe: DatePipe) {
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

  addCourse() {
    if (this.registerForm.valid) {
      this.transformStartDateFormat();
      this.transformEndDateFormat();
      const userData = this.registerForm.value;
      this.addCourseService.addCourse(userData).subscribe(result => {
        let courseId = result.id;
        this.saveCoursePhoto(courseId);
        window.location.reload();
      });
    };
  };

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

  showAddDialog() {
    this.add = true;
  }
}
