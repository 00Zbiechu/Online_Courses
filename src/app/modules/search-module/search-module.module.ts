import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarModule } from 'primeng/sidebar';
import { LoaderModuleModule } from '../loader-module/loader-module.module';
import { CourseListComponent } from '../search-module/components/course-list/course-list.component';
import { MainPageComponent } from '../search-module/components/main-page/main-page.component';
import { SidebarComponent } from '../search-module/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    CourseListComponent,
    MainPageComponent,
    SidebarComponent,
  ],
  imports: [
    DropdownModule,
    CalendarModule,
    CalendarModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    PaginatorModule,
    DividerModule,
    CardModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    LoaderModuleModule,
    RouterModule.forChild([
      { path: '', component: MainPageComponent },
      { path: '', component: CourseListComponent },
      { path: '', component: SidebarComponent },
    ])
  ]
})
export class SearchModuleModule { }
