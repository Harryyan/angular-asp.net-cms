import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersCalendarComponent } from './offers-calendar/offers-calendar.component';

@NgModule({
  declarations: [OffersListComponent, OffersCalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    OfferRoutingModule
  ]
})
export class OfferModule { }
