import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferService } from './offer.service';

@NgModule({
  providers: [OfferService],
  imports: [
    CommonModule
  ]
})
export class OfferApiModule { }
