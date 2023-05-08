import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoaderModuleModule } from '../loader-module/loader-module.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoaderModuleModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModuleModule { }
