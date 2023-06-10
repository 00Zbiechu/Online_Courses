import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoaderModuleModule } from '../loader-module/loader-module.module';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoaderModuleModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: RegisterComponent }
    ])
  ]
})
export class RegisterModuleModule { }
