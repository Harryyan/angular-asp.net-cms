import { NgModule } from '@angular/core';
import { OfferFacade } from './offer.facade';
import { OfferApiModule } from '../api/offer-api.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OFFER_FEATURE_KEY } from './offer-feature-key';
import { OfferEffects } from './offer.effects';
import { reducer } from './offer.reducer';

@NgModule({
  providers: [OfferFacade],
  imports: [
    OfferApiModule,
    StoreModule.forFeature(OFFER_FEATURE_KEY, reducer),
    EffectsModule.forFeature([OfferEffects])
  ]
})
export class OfferStoreModule { }
