import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LightgalleryModule } from 'lightgallery/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './modules/add-course-module/components/calendar/calendar.component';
import { CreateCourseFormComponent } from './modules/add-course-module/components/create-course-form/create-course-form.component';
import { CreateCourseComponent } from './modules/add-course-module/components/create-course/create-course.component';
import { CarouselComponent } from './modules/course-module/components/carousel/carousel.component';
import { CourseSiteComponent } from './modules/course-module/components/course-site/course-site.component';
import { FooterComponent } from './modules/footer-module/components/footer/footer.component';
import { HeaderComponent } from './modules/header-module/components/header/header.component';
import { LoginComponent } from './modules/login-module/components/login/login.component';
import { RegisterComponent } from './modules/register-module/components/register/register.component';
import { CourseListComponent } from './modules/search-module/components/course-list/course-list.component';
import { MainPageComponent } from './modules/search-module/components/main-page/main-page.component';
import { SidebarComponent } from './modules/search-module/components/sidebar/sidebar.component';


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
    CourseSiteComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    LightgalleryModule,
    HttpClientModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
