import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { OffersCalendarComponent } from './offers-calendar.component';
import { OffersCalendarRoutingModule } from './offers-calendar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OffersCalendarRoutingModule,
    FullCalendarModule
  ],
  declarations: [OffersCalendarComponent]
})
export class OffersCalendarModule { }
