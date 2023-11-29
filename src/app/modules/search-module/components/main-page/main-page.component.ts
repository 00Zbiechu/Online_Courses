import { Component, ViewEncapsulation } from '@angular/core';
import { ICourseForList } from '../course-list/model/ICourseForList';
import { IPaginationForCourseList } from '../course-list/model/IPaginationForCourseList';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class MainPageComponent {

  searchResult: ICourseForList[];
  totalSearchedRecords: number;
  isSearching: boolean = false;
  searchPaginationParams: IPaginationForCourseList = {
    page: 0,
    size: 6,
    sort: 'title',
    order: 'ASC'
  };

  setSearchResult(searchResult: ICourseForList[]) {
    this.searchResult = searchResult;
  }

  setIsSearching(isSearching: boolean) {
    this.isSearching = isSearching;
  }

  setPaginationParams(searchPaginationParams: IPaginationForCourseList) {
    this.searchPaginationParams = searchPaginationParams;
  }

  setTotalSearchedRecords(totalSearchedRecords: number) {
    this.totalSearchedRecords = totalSearchedRecords;
  }
}
