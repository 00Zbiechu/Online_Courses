import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../../services/register-service.service';
import { Register } from './model/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  register: Register;

  constructor(private registerService: RegisterServiceService, private router: Router) {
    this.register = new Register();
  }

  registration() {

    this.registerService.registration(this.register).subscribe(result => {
      this.router.navigate(['/login'])
    });

  }

}
