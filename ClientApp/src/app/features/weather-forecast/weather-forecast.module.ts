import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ForecastComponent } from './forecast/forecast.component';

import { WeatherForecastRoutingModule } from './routing/weather-forecast-routing.module';

@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule,
    WeatherForecastRoutingModule,
    SharedModule
  ]
})
export class WeatherForecastModule { }
