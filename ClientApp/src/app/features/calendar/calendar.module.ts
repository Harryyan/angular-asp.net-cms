import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { CalendarRoutingModule } from './routing/calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from 'primeng/fullcalendar';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CalendarRoutingModule,
    FullCalendarModule
  ],
  declarations: [CalendarComponent]
})
export class CalendarModule { }
