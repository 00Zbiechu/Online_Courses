import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login-module/components/login/login.component';
import { RegisterComponent } from './modules/register-module/components/register/register.component';
import { MainPageComponent } from './modules/search-module/components/main-page/main-page.component';
import { CreateCourseComponent } from './modules/add-course-module/components/create-course/create-course.component';
import { CourseSiteComponent } from './modules/course-module/components/course-site/course-site.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateCourseComponent },
  { path: 'course', component: CourseSiteComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


