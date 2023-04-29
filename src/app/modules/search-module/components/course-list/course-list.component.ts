import { Component, OnInit } from '@angular/core';
import { faBookmark, faClock, faList, faScroll, faUser } from '@fortawesome/free-solid-svg-icons';
import { SearchServiceService } from '../../services/search-service.service';
import { Course } from "./model/Course";
import { Page } from "./model/Page";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  faList = faList;
  faUser = faUser;
  faClock = faClock;
  faBookmark = faBookmark;
  faScroll = faScroll;


  page: number = 0;
  count: number = 0;
  tableSize: number = 5;


  courses: Course[];

  constructor(private searchService: SearchServiceService) {

  }

  ngOnInit(): void {
    this.fetchCourses(this.page);
  }

  fetchCourses(pageVar: number): void {

    this.searchService.getCountOfCourses().subscribe((result: Number) => {

      this.count = result.valueOf();

    });


    this.searchService.getCourses(pageVar)
      .subscribe((page: Page) => {

        this.courses = page.content;

      });
  }

  onPageChange(event: any) {

    this.page = --event;
    this.fetchCourses(this.page);
    this.page = ++event;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchCourses(this.page);
  }

}


