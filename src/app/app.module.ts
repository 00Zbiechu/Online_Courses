import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseModuleModule } from './modules/add-course-module/add-course-module.module';
import { CourseModuleModule } from './modules/course-module/course-module.module';
import { FooterModuleModule } from './modules/footer-module/footer-module.module';
import { HeaderModuleModule } from './modules/header-module/header-module.module';
import { LoginModuleModule } from './modules/login-module/login-module.module';
import { RegisterModuleModule } from './modules/register-module/register-module.module';
import { SearchModuleModule } from './modules/search-module/search-module.module';
import { LoaderModuleModule } from './modules/loader-module/loader-module.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModuleModule,
    FooterModuleModule,
    LoginModuleModule,
    RegisterModuleModule,
    CourseModuleModule,
    AddCourseModuleModule,
    SearchModuleModule,
    LoaderModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
