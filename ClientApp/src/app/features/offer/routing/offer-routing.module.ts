import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../../core/components/layouts/main/layout.component';

import { OffersListComponent } from '../offers-list/offers-list.component'

const routes: Routes = [
  {
    path: 'offers',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'offers'
      },
      {
        path: 'offers', component: OffersListComponent, data: { title: 'Offers List'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
