import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseSiteComponent } from './course-site/course-site.component';

const routes: Routes = [
  {path : '', component : MainPageComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'create', component : CreateCourseComponent},
  {path : 'course', component : CourseSiteComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


