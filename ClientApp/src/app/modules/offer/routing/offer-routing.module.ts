import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../../layouts/main/layout.component';

import { OffersListComponent } from '../offers-list/offers-list.component'
import { OffersCalendarComponent } from '../offers-calendar/offers-calendar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'offers'
      },
      {
        path: 'offers', component: OffersListComponent, data: { title: 'Offers List'}
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('../offers-calendar/offers-calendar.module').then((m) => m.OffersCalendarModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
