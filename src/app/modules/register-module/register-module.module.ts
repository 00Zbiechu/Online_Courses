import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoaderModuleModule } from '../loader-module/loader-module.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoaderModuleModule,
    FormsModule,
    RouterModule
  ]
})
export class RegisterModuleModule { }
