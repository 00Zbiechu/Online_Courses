//Dependency
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

//Main Component
import { AppComponent } from './app.component';

//Components
import { CourseListComponent } from './modules/search-module/components/course-list/course-list.component';
import { MainPageComponent } from './modules/search-module/components/main-page/main-page.component';
import { SidebarComponent } from './modules/search-module/components/sidebar/sidebar.component';

//App Modules
import { AddCourseModuleModule } from './modules/add-course-module/add-course-module.module';
import { CourseModuleModule } from './modules/course-module/course-module.module';
import { FooterModuleModule } from './modules/footer-module/footer-module.module';
import { HeaderModuleModule } from './modules/header-module/header-module.module';
import { LoginModuleModule } from './modules/login-module/login-module.module';
import { RegisterModuleModule } from './modules/register-module/register-module.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CourseListComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule,

    HeaderModuleModule,
    FooterModuleModule,
    LoginModuleModule,
    RegisterModuleModule,
    CourseModuleModule,
    AddCourseModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
