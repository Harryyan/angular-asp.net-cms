import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../../core/components/layouts/main/layout.component';

import { OffersListComponent } from '../offers-list/offers-list.component'
import { NewOfferComponent } from '../new-offer/new-offer.component';
import { CalendarComponent } from '../calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'offerlist'
      },
      {
        path: 'offerlist', component: OffersListComponent, data: { title: 'Offers List'}
      },
      {
        path: 'newoffer', component: NewOfferComponent, data: { title: 'New Offer'}
      },
      {
        path: 'calendar', component: CalendarComponent, data: { title: 'Calendar View'}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
