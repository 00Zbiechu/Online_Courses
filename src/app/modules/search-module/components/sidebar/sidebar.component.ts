import { Component } from '@angular/core';
import { SearchFormService } from '../../services/search-form.service';
import { SearchServiceService } from '../../services/search-service.service';
import { Course } from './model/Course';
import { Search } from "./model/Search";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  search: Search;
  course: Course;


  constructor(private searchService: SearchServiceService, private searchForm: SearchFormService) {
    this.search = new Search();
    this.searchForm.currentCourse.subscribe(course => this.course = course);
  }


  newCourse(course: Course) {
    this.searchForm.changeCourse(course)
  }

  sendSearchRequest() {

    this.searchService.searchForCourses(this.search)
      .subscribe((result: Course) => {
        this.newCourse(result);
      });

  }




}
