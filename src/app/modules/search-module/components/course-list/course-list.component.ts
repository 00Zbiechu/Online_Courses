import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

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

    this.searchService.getCountOfCourses().subscribe((result: Number) =>{

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

export interface Page {
  content: Course[]
  pageable: string
  last: boolean
  totalElements: number
  totalPages: number
  size: number
  number: number
  sort: Sort
  first: boolean
  numberOfElements: number
  empty: boolean
}

export interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

export interface Course {
  id: number
  title: string
  startData: string
  endData: string
  topic: string
  description: string
  image: string
}
