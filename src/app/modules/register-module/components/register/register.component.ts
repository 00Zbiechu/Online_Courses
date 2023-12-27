import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../../services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class RegisterComponent {

  fileToUpload: File | null;
  registerForm: FormGroup;
  confirmationDialog: boolean = false;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterServiceService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(40)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPassword: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator
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

  onFileSelected(event: any) {
    const files: FileList = event.files;
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    }
  }

  registration() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      const formData: FormData = new FormData();
      formData.append('userDTO', new Blob([JSON.stringify(userData)], { type: 'application/json' }));

      if (this.fileToUpload != null) {
        formData.append("photo", this.fileToUpload);
      }

      this.registerService.registration(formData).subscribe(result => {
        this.registerForm.reset();
        this.fileToUpload = null;
        this.confirmationDialog = true;
      });
    }
  }
}
