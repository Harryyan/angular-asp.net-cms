import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersCalendarComponent } from './offers-calendar.component';

const routes: Routes = [
  {
    path : '',
    component: OffersCalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersCalendarRoutingModule { }
