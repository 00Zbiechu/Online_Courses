import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from "../components/sidebar/model/Course";

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {

  private courseSource = new BehaviorSubject<Course[]>([{ title: "", startDate: "", endDate: "", topic: "", description: "", image: "", username: "" }]);
  currentCourse = this.courseSource.asObservable();

  constructor() { }

  changeCourse(course: Course[]) {
    this.courseSource.next(course)
  }

}
