import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from '../course-module/components/carousel/carousel.component';
import { CourseSiteComponent } from '../course-module/components/course-site/course-site.component';
import { LightgalleryModule } from 'lightgallery/angular';



@NgModule({
  declarations: [
    CarouselComponent,
    CourseSiteComponent
  ],
  imports: [
    CommonModule,
    LightgalleryModule

  ],
  exports: [
    CarouselComponent,
    CourseSiteComponent
  ]
})
export class CourseModuleModule { }
