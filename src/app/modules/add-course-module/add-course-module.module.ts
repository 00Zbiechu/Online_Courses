import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from '../add-course-module/components/calendar/calendar.component';
import { CreateCourseFormComponent } from '../add-course-module/components/create-course-form/create-course-form.component';
import { CreateCourseComponent } from '../add-course-module/components/create-course/create-course.component';
import { LoaderModuleModule } from '../loader-module/loader-module.module';
import { EditCourseComponent } from './components/edit-course/edit-course.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CreateCourseComponent,
    CreateCourseFormComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    FormsModule,
    BrowserModule,
    LoaderModuleModule
  ]
})
export class AddCourseModuleModule { }
