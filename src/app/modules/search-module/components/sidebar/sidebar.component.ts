import { Component } from '@angular/core';
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

  constructor(private searchService: SearchServiceService) {
    this.search = new Search();
  }


  sendSearchRequest() {

    this.searchService.searchForCourses(this.search)
      .subscribe((result: Course) => {
        this.course = result;
        window.location.reload(); //Reset window to show results
      });

  }


}
