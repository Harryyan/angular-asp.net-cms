import { Component, OnInit } from '@angular/core';

import { OfferFacade } from '../store/offer.facade';
import { Observable } from 'rxjs';
import { OfferCalendarDTO } from '../models/offer';
import { EVENT_COLORS } from '../../../core/constants/event-colors' 

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
    defaultDate: new Date(),
    eventTextColor: "white",
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
      map(o => o.map(sp => {
        var random = Math.floor(Math.random() * EVENT_COLORS.length);
        var event = new OfferCalendarDTO()
        event.id = sp.id
        event.title = sp.id + " -- " + sp.title
        event.start = sp.startDateTime
        event.end = sp.endDateTime
        event.color = EVENT_COLORS[random]

        return event
      }
    )))
  }
}
