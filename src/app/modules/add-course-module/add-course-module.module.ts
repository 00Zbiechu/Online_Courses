import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../add-course-module/components/calendar/calendar.component';
import { CreateCourseFormComponent } from '../add-course-module/components/create-course-form/create-course-form.component';
import { CreateCourseComponent } from '../add-course-module/components/create-course/create-course.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CalendarComponent,
    CreateCourseComponent,
    CreateCourseFormComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    CalendarComponent,
    CreateCourseComponent,
    CreateCourseFormComponent
  ],
})
export class AddCourseModuleModule { }
