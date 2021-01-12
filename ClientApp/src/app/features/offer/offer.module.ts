import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './routing/offer-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OffersListComponent } from './offers-list/offers-list.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { OfferStoreModule } from './store/offer-store.module';


@NgModule({
  declarations: [
    OffersListComponent, 
    NewOfferComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OfferRoutingModule,
    OfferStoreModule,
    TableModule,
    ProgressBarModule
  ]
})
export class OfferModule { }
