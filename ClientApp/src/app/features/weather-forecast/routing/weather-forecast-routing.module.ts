import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';

import { LayoutComponent } from '../../../layouts/main/layout.component';

import { ForecastComponent } from '../forecast/forecast.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'weatherforecasts'
      },
      {
        path: 'weatherforecasts', component: ForecastComponent, data: { title: 'Weather Forecasts'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherForecastRoutingModule { }
