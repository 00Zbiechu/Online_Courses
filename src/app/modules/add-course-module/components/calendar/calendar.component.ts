import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CourseForCalendar } from './model/CourseForCalendar';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() courses: CourseForCalendar[];
  Events: any[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    displayEventTime: false,
    events: []
  };

  ngOnInit(): void {
    this.setCalendarEvents();
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