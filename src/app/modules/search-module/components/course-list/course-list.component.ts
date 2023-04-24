import { Component, OnInit } from '@angular/core';
import { Course, SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [3, 6, 9, 12];

  courses: Course[];

  constructor(private searchServiceService: SearchServiceService) {

  }

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.searchServiceService.getCourses().subscribe(
      (response) => {
        this.courses = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchCourses();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchCourses();
  }

}
