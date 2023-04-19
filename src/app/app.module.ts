import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-module/header/header.component';
import { FooterComponent } from './footer-module/footer/footer.component';
import { SidebarComponent } from './search-module/sidebar/sidebar.component';
import { CourseListComponent } from './search-module/course-list/course-list.component';
import { MainPageComponent } from './search-module/main-page/main-page.component';
import { LoginComponent } from './login-module/login/login.component';
import { RegisterComponent } from './register-module/register/register.component';
import { CreateCourseComponent } from './add-course-module/create-course/create-course.component';
import { CalendarComponent } from './add-course-module/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CreateCourseFormComponent } from './add-course-module/create-course-form/create-course-form.component';
import { CourseSiteComponent } from './course-module/course-site/course-site.component';


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
    CreateCourseFormComponent,
    CourseSiteComponent
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
