import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LoginComponent } from './core/components/login/login.component';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: "offers",
    pathMatch: 'full'
  },
  {
    path: 'offers',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/offer/offer.module').then((m) => m.OfferModule)
  },
  {
    path: 'weatherforecasts',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/weather-forecast/weather-forecast.module').then((m) => m.WeatherForecastModule)
  },
  { 
    path: 'login', 
    component: LoginComponent, 
    data: { title: 'Login' } 
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
