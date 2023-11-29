import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { faBookmark, faClock, faList, faScroll, faUser } from '@fortawesome/free-solid-svg-icons';
import { SearchServiceService } from '../../services/search-service.service';
import { ICoursePage } from '../course-list/model/ICoursePage';
import { IPaginationForCourseList } from '../course-list/model/IPaginationForCourseList';
import { ICourseForList } from './model/ICourseForList';
import { ITopic } from './model/ITopic';
import { Search } from "./model/Search";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [DatePipe]
})
export class SidebarComponent implements OnInit {

  faList = faList;
  faUser = faUser;
  faClock = faClock;
  faBookmark = faBookmark;
  faScroll = faScroll;

  previousPaginationParams: IPaginationForCourseList = {
    page: 0,
    size: 6,
    sort: 'title',
    order: 'ASC'
  };
  sidebarVisible: boolean;
  search: Search;
  emptyCourseForList: ICourseForList[] = [];
  topics!: ITopic[];

  @Output() searchResult = new EventEmitter<ICourseForList[]>();
  @Output() isSearching = new EventEmitter<boolean>();
  @Output() totalSearchedRecords = new EventEmitter<number>();
  @Input() searchPaginationParams: IPaginationForCourseList;

  constructor(private searchService: SearchServiceService, private datePipe: DatePipe) {
    this.search = new Search();
  }

  ngOnInit(): void {
    this.topics = [
      { name: '' },
      { name: 'Programming course' },
      { name: 'Math course' }
    ];
  }

  ngDoCheck(): void {
    if (this.searchPaginationParams && this.isPaginationParamsChanged(this.searchPaginationParams, this.previousPaginationParams)) {
      this.sendSearchRequest();
      this.previousPaginationParams = { ...this.searchPaginationParams };
    }
  }

  isPaginationParamsChanged(currentParams: IPaginationForCourseList, previousParams: IPaginationForCourseList): boolean {
    if (previousParams) {
      return (
        currentParams.order !== previousParams.order ||
        currentParams.sort !== previousParams.sort ||
        currentParams.page !== previousParams.page ||
        currentParams.size !== previousParams.size
      );
    }
    return false;
  }

  sendSearchRequest() {
    this.sidebarVisible = false;
    this.transformStartDateFormat();
    this.transformEndDateFormat();

    this.search.page = this.searchPaginationParams.page;
    this.search.size = this.searchPaginationParams.size;
    this.search.order = this.searchPaginationParams.order;
    this.search.sort = this.searchPaginationParams.sort;

    this.searchService.searchForCourses(this.search)
      .subscribe((result: ICoursePage) => {
        this.searchResult.emit(result.content);
        this.isSearching.emit(true);
        this.totalSearchedRecords.emit(result.totalElements)
      });
  }

  sendEmptySearchRequest() {
    this.sidebarVisible = false;
    this.search = new Search();
    this.searchService.searchForCourses(this.search)
      .subscribe((result: ICoursePage) => {
        this.searchResult.emit(result.content);
        this.isSearching.emit(false);
      });

    this.searchResult.emit(this.emptyCourseForList);
    this.isSearching.emit(false);
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