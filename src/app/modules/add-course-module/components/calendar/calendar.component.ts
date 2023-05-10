import { Component, Injectable, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AddCourseServiceService } from '../../services/add-course-service.service';
import { CourseForCalendar } from './model/CourseForCalendar';
import { CoursesForCalendar } from './model/CoursesForCalendar';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  courses: CourseForCalendar[];
  Events: any[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    displayEventTime: false,
    events: []
  };

  constructor(private addCourseService: AddCourseServiceService) {

  }

  ngOnInit(): void {
    this.fetchCourses();
  }


  fetchCourses(): void {

    this.addCourseService.getCoursesForCalendar()
      .subscribe((result: CoursesForCalendar) => {

        this.courses = result.courseForCalendarList;
        this.setCalendarEvents();

      });
  }


  setCalendarEvents() {
    this.calendarOptions.events = this.courses.map(event => {
      return {
        title: event.title,
        start: new Date(event.startDate),
        end: new Date(event.endDate)
      };
    });
  }



}