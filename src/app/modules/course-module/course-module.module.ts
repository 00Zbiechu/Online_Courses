import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { LoaderModuleModule } from '../loader-module/loader-module.module';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { OwnerPageComponent } from './components/owner-page/owner-page.component';
import { VisitorPageComponent } from './components/visitor-page/visitor-page.component';

@NgModule({
  declarations: [
    CoursePageComponent,
    OwnerPageComponent,
    VisitorPageComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule,
    CardModule,
    ButtonModule,
    DividerModule,
    CarouselModule,
    AccordionModule,
    FileUploadModule,
    DialogModule,
    InputTextModule,
    LoaderModuleModule,
    RouterModule.forChild([
      { path: '', component: CoursePageComponent },
      { path: '', component: OwnerPageComponent },
      { path: '', component: VisitorPageComponent }
    ])
  ]
})
export class CourseModuleModule { }
