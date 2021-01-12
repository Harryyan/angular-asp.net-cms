import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "offers",
    pathMatch: 'full'
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('./features/offer/offer.module').then((m) => m.OfferModule)
  },
  {
    path: 'weatherforecasts',
    loadChildren: () =>
      import('./features/weather-forecast/weather-forecast.module').then((m) => m.WeatherForecastModule)
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
