import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AddCourseServiceService } from '../../services/add-course-service.service';
import { CourseForCalendar } from './model/CourseForCalendar';

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

    this.addCourseService.getCourses()
      .subscribe((result: CourseForCalendar[]) => {

        this.courses = result;
        this.setCalendarEvents();

      });
  }


  setCalendarEvents() {
    this.calendarOptions.events = this.courses.map(event => {
      return {
        title: event.title,
        start: new Date(event.startData),
        end: new Date(event.endData)
      };
    });
  }



}