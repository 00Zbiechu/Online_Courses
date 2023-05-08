import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoaderModuleModule } from '../loader-module/loader-module.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoaderModuleModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModuleModule { }
