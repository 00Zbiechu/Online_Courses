import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';
import { CarouselComponent } from '../course-module/components/carousel/carousel.component';
import { CourseSiteComponent } from '../course-module/components/course-site/course-site.component';
import { LoaderModuleModule } from '../loader-module/loader-module.module';



@NgModule({
  declarations: [
    CarouselComponent,
    CourseSiteComponent
  ],
  imports: [
    CommonModule,
    LightgalleryModule,
    LoaderModuleModule,
    RouterModule.forChild([
      { path: '', component: CourseSiteComponent },
      { path: '', component: CarouselComponent }

    ])

  ]
})
export class CourseModuleModule { }
