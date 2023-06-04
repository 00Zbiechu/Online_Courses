import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faBookmark, faClock, faList, faScroll, faUser } from '@fortawesome/free-solid-svg-icons';
import { SearchFormService } from '../../services/search-form.service';
import { SearchServiceService } from '../../services/search-service.service';
import { Course } from "./model/Course";
import { Page } from "./model/Page";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseListComponent),
      multi: true
    }
  ]
})
export class CourseListComponent implements OnInit, ControlValueAccessor {

  faList = faList;
  faUser = faUser;
  faClock = faClock;
  faBookmark = faBookmark;
  faScroll = faScroll;


  page: number = 0;
  count: number = 0;
  tableSize: number = 5;
  tableSizes = [5, 10, 15, 20];

  sortBy: string = 'title';

  order: string = 'ASC';


  courses: Course[];


  constructor(private searchService: SearchServiceService, private searchForm: SearchFormService) {
    this.searchForm.currentCourse.subscribe(result => {
      this.courses = [];
      this.courses = result;

    });
  }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.searchForm.currentCourse.subscribe(course => this.courses = course);
    this.fetchCourses(this.page, this.tableSize, this.sortBy, this.order);
  }

  fetchCourses(pageVar: number, sizeVar: number, sortVar: string, orderVar: string): void {

    this.searchService.getCountOfCourses().subscribe((result: Number) => {

      this.count = result.valueOf();

    });


    this.searchService.getCourses(pageVar, sizeVar, sortVar, orderVar)
      .subscribe((page: Page) => {

        this.courses = page.content;

      });
  }

  onPageChange(event: any) {

    this.page = --event;
    this.fetchCourses(this.page, this.tableSize, this.sortBy, this.order);
    this.page = ++event;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 0;
    this.fetchCourses(this.page, this.tableSize, this.sortBy, this.order);
  }

  onSortByChange(event: any): void {
    this.sortBy = event.target.value;
    this.page = 0;
    console.log(this.sortBy);
    this.fetchCourses(this.page, this.tableSize, this.sortBy, this.order);
  }

  onOrderChange(event: any): void {
    this.order = event.target.value;
    this.page = 0;
    this.fetchCourses(this.page, this.tableSize, this.sortBy, this.order);
  }

}


