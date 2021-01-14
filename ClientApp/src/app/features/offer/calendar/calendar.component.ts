import { Component, OnInit } from '@angular/core';

import { OfferFacade } from '../store/offer.facade';
import { Observable } from 'rxjs';
import { OfferCalendarDTO } from '../models/offer';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  options = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    defaultDate: '2021-02-01',
    header: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }
  }

  public offers$: Observable<OfferCalendarDTO[]>;

  constructor(private offerFacade: OfferFacade) { }

  ngOnInit() {
    this.offerFacade.loadOffers();
    this.offers$ = this.offerFacade.getOffers().pipe(
      map(o => o.map((sp): OfferCalendarDTO => ({
        id: sp.id,
        title: sp.id + " -- " + sp.title,
        start: sp.startDateTime,
        end: sp.endDateTime
      })))
    );
  }
}
