import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './routing/offer-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OffersListComponent } from './offers-list/offers-list.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { OfferStoreModule } from './store/offer-store.module';
import { CalendarModule } from '../calendar/calendar.module';


@NgModule({
  declarations: [OffersListComponent, NewOfferComponent],
  imports: [
    CommonModule,
    SharedModule,
    OfferRoutingModule,
    OfferStoreModule,
    CalendarModule,
    TableModule,
    ProgressBarModule
  ]
})
export class OfferModule { }
