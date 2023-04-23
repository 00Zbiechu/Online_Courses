import { Component, OnInit } from '@angular/core';
import { Course, SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Course[];

  constructor(private searchServiceService: SearchServiceService) {

  }

  ngOnInit(): void {
    this.searchServiceService.getCourses().subscribe(value => {

      this.courses = value;

    });
  }

}
