import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faBookmark, faClock, faList, faScroll, faUser } from '@fortawesome/free-solid-svg-icons';
import { SelectItem } from 'primeng/api';
import { SearchServiceService } from '../../services/search-service.service';
import { ICourseForList } from "./model/ICourseForList";
import { ICoursePage } from './model/ICoursePage';
import { IPaginationForCourseList } from './model/IPaginationForCourseList';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
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

  count: number = 0;
  tableSizes = [5, 10, 15, 20];

  paginationParams: IPaginationForCourseList = {
    page: 0,
    size: 6,
    sort: 'title',
    order: 'ASC'
  };

  searchPaginationParams: IPaginationForCourseList = {
    page: 0,
    size: 6,
    sort: 'title',
    order: 'ASC'
  };

  sortByOptions: SelectItem[] = [
    { label: 'Title', value: 'title' },
    { label: 'Start date', value: 'startDate' },
    { label: 'End date', value: 'endDate' },
    { label: 'Topic', value: 'topic' }
  ];

  orderOptions: SelectItem[] = [
    { label: 'Ascending', value: 'ASC' },
    { label: 'Descending', value: 'DESC' }
  ];

  tableSizeOptions: SelectItem[] = [
    { label: '6', value: 6 },
    { label: '12', value: 12 },
    { label: '18', value: 18 }
  ]

  tableSizesOptions: SelectItem[];

  courseForList: ICourseForList[];

  @Input() totalSearchedRecords: number;
  @Input() searchResult: ICourseForList[];
  @Input() isSearching: boolean;

  @Output() searchPaginationOutput = new EventEmitter<IPaginationForCourseList>;

  constructor(private searchService: SearchServiceService, private router: Router) { }

  ngOnInit(): void {
    this.tableSizesOptions = this.tableSizes.map(size => ({ label: size.toString(), value: size }));
  }

  ngOnChanges() {
    this.processCourseList();
  }

  fetchCourses(paginationParamas: IPaginationForCourseList): void {
    this.searchService.getCourses(this.paginationParams)
      .subscribe((result: ICoursePage) => {
        this.courseForList = result.content;
        this.count = result.totalElements;
      });
  }

  processCourseList() {
    if (this.isSearching) {
      this.courseForList = this.searchResult;
    } else {
      this.fetchCourses(this.paginationParams);
    }
  }

  onPageChange(event: any) {
    this.paginationParams.page = event.page;
    this.fetchCourses(this.paginationParams);
  }

  onSearchPageChange(event: any) {
    this.searchPaginationParams.page = event.page;
    this.searchPaginationOutput.emit(this.searchPaginationParams);
  }

  onTableSizeChange(event: any): void {
    this.paginationParams.size = event.value.value;
    this.paginationParams.page = 0;
    this.fetchCourses(this.paginationParams);
  }

  onSearchTableSizeChange(event: any): void {
    this.searchPaginationParams.size = event.value.value;
    this.searchPaginationParams.page = 0;
    this.searchPaginationOutput.emit(this.searchPaginationParams);
  }

  onSortByChange(event: any): void {
    this.paginationParams.sort = event.value.value;
    this.paginationParams.page = 0;
    this.fetchCourses(this.paginationParams);
  }

  onSearchSortByChange(event: any): void {
    this.searchPaginationParams.sort = event.value.value;
    this.searchPaginationParams.page = 0;
    this.searchPaginationOutput.emit(this.searchPaginationParams);
  }

  onOrderChange(event: any): void {
    this.paginationParams.order = event.value.value;
    this.paginationParams.page = 0;
    this.fetchCourses(this.paginationParams);
  }

  onSearchOrderChange(event: any): void {
    this.searchPaginationParams.order = event.value.value;
    this.searchPaginationParams.page = 0;
    this.searchPaginationOutput.emit(this.searchPaginationParams);
  }

  isPhotoAvailable(photo: any): boolean {
    return photo && photo.length > 0;
  }

  isSearchingDone(): boolean {
    return this.isSearching;
  }

  viewCourseDetails(courseId: number) {
    this.router.navigate(['/course', courseId]);
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
}