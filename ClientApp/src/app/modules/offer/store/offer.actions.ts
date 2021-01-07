import { createAction, props } from '@ngrx/store';
import { Offer } from '../models/offer';

export const LoadOffersAction = createAction('Load Offers');
export const LoadOffersFailureAction = createAction('Load Offers Failure', props<{errorMessage: string}>());
export const LoadOffersSuccessAction = createAction('Load Offers Success', props<{offers: Offer[]}>());