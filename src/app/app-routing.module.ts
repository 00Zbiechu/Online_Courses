import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/search-module/search-module.module').then(m => m.SearchModuleModule) },
  { path: 'login', loadChildren: () => import('./modules/login-module/login-module.module').then(m => m.LoginModuleModule) },
  { path: 'register', loadChildren: () => import('./modules/register-module/register-module.module').then(m => m.RegisterModuleModule) },
  { path: 'create', loadChildren: () => import('./modules/add-course-module/add-course-module.module').then(m => m.AddCourseModuleModule) },
  { path: 'course/:id', loadChildren: () => import('./modules/course-module/course-module.module').then(m => m.CourseModuleModule) },
  { path: 'participation', loadChildren: () => import('./modules/participant-module/participant-module.module').then(m => m.ParticipantModuleModule) },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


