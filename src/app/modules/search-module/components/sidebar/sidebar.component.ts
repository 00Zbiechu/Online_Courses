import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faBookmark, faClock, faList, faScroll, faUser } from '@fortawesome/free-solid-svg-icons';
import { SearchFormService } from '../../services/search-form.service';
import { SearchServiceService } from '../../services/search-service.service';
import { Course } from './model/Course';
import { FoundCourses } from './model/FoundCourses';
import { Search } from "./model/Search";
import { Topic } from './model/Topic';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [DatePipe]
})
export class SidebarComponent implements OnInit {

  faList = faList;
  faUser = faUser;
  faClock = faClock;
  faBookmark = faBookmark;
  faScroll = faScroll;

  search: Search;
  course: Course[];

  topics!: Topic[];


  constructor(private searchService: SearchServiceService, private searchForm: SearchFormService, private datePipe: DatePipe) {
    this.search = new Search();
    this.searchForm.currentCourse.subscribe(course => this.course = course);
  }

  ngOnInit(): void {
    this.topics = [
      { name: '' },
      { name: 'Programming Course' },
      { name: 'Math Course' }
    ];
  }


  newCourse(course: Course[]) {
    this.searchForm.changeCourse(course)
  }

  sendSearchRequest() {

    this.transformStartDateFormat();
    this.transformEndDateFormat();

    this.searchService.searchForCourses(this.search)
      .subscribe((result: FoundCourses) => {
        this.newCourse(result.foundCoursesList);
      });
  }

  sendEmptySearchRequest() {
    this.search = new Search();
    this.searchService.searchForCourses(this.search)
      .subscribe((result: FoundCourses) => {
        this.newCourse(result.foundCoursesList);
      });
  }

  transformStartDateFormat() {
    if (this.search.startDate !== null) {
      this.search.startDate = this.datePipe.transform(this.search.startDate, 'yyyy-MM-dd')!;
    }
  }

  transformEndDateFormat() {
    if (this.search.endDate !== null) {
      this.search.endDate = this.datePipe.transform(this.search.endDate, 'yyyy-MM-dd')!;
    }
  }




}
