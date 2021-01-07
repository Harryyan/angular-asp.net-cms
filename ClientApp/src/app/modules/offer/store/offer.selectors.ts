import { createSelector } from '@ngrx/store';
import { OFFER_FEATURE_KEY } from './offer-feature-key';
import { OfferState } from './offer.state';

export const getOfferStateSelector = createSelector(state => state, state => state[OFFER_FEATURE_KEY] as OfferState);
export const getIsLoadingSelector = createSelector(getOfferStateSelector, state => state.isLoading);
export const getOffersSelector = createSelector(getOfferStateSelector, state => state.offers ? state.offers : [] );
export const getHasErrorSelector = createSelector(getOfferStateSelector, state => state.hasError);

