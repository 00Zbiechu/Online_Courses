import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CourseListComponent,
    LoginComponent,
    MainPageComponent,
    RegisterComponent,
    CreateCourseComponent,
    CalendarComponent,
    CreateCourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule // register FullCalendar with your app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
