import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
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
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FileUploadModule,
    InputTextareaModule,
    ConfirmPopupModule,
    DropdownModule,
    PasswordModule,
    CalendarModule,
    CardModule,
    DialogModule,
    ButtonModule,
    VirtualScrollerModule,
    LoaderModuleModule,
    RouterModule.forChild([
      { path: '', component: CreateCourseComponent },
      { path: '', component: CalendarComponent },
      { path: '', component: CreateCourseFormComponent },
      { path: '', component: EditCourseComponent }
    ])
  ],
  providers: [ConfirmationService]
})
export class AddCourseModuleModule { }
