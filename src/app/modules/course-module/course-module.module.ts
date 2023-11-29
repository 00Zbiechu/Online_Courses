import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModuleModule } from '../loader-module/loader-module.module';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { OwnerPageComponent } from './components/owner-page/owner-page.component';
import { VisitorPageComponent } from './components/visitor-page/visitor-page.component';

@NgModule({
  declarations: [
    CoursePageComponent,
    OwnerPageComponent,
    VisitorPageComponent
  ],
  imports: [
    CommonModule,
    LoaderModuleModule,
    RouterModule.forChild([
      { path: '', component: CoursePageComponent },
      { path: '', component: OwnerPageComponent },
      { path: '', component: VisitorPageComponent }
    ])
  ]
})
export class CourseModuleModule { }
