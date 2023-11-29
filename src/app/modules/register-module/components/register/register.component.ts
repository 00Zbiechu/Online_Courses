import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/modules/login-module/services/login-service.service';
import { RegisterServiceService } from '../../services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class RegisterComponent {

  fileToUpload: File | null = null;
  registerForm: FormGroup;

  constructor(private loginService: LoginServiceService, private formBuilder: FormBuilder, private registerService: RegisterServiceService, private router: Router) {
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

  saveUserPhoto() {
    if (this.fileToUpload) {
      const formData: FormData = new FormData();
      formData.append('photo', this.fileToUpload);
      this.registerService.uploadPhoto(formData).subscribe();
    }
  }

  registration() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.registerService.registration(userData).subscribe(result => {
        sessionStorage.setItem('token', result.accessToken);
        sessionStorage.setItem('refreshToken', result.refreshToken);
        this.loginService.loginState();
        this.saveUserPhoto();
        this.router.navigate(['/']).then(() => {
          window.location.reload();
          window.location.reload();
        });
      });
    }
  }
}
