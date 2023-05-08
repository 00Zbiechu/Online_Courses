import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { CourseListComponent } from '../search-module/components/course-list/course-list.component';
import { MainPageComponent } from '../search-module/components/main-page/main-page.component';
import { SidebarComponent } from '../search-module/components/sidebar/sidebar.component';
import { LoaderModuleModule } from '../loader-module/loader-module.module';

@NgModule({
  declarations: [
    CourseListComponent,
    MainPageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule,
    LoaderModuleModule
  ]
})
export class SearchModuleModule { }
