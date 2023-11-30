import { Component, Injectable, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ICourseForAdmin } from '../create-course/model/ICourseForAdmin';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CalendarComponent implements OnChanges {

  @Input() courses: ICourseForAdmin[];
  Events: any[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    displayEventTime: false,
    events: []
  };

  ngOnChanges(): void {
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
