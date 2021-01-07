import { initialOfferState, OfferState } from './offer.state';
import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './offer.actions';


const offerReducer = createReducer(
    initialOfferState,
    on(Actions.LoadOffersAction, (state) =>
        ({
            ...state,
            isLoading: true
        })),
    on(Actions.LoadOffersFailureAction, (state, { errorMessage }) =>
        ({
            ...state,
            hasError: true,
            isLoading: false,
            errorMessage: errorMessage
        })),
    on(Actions.LoadOffersSuccessAction, (state, { offers }) =>
        ({
            ...state,
            hasError: false,
            isLoading: false,
            errorMessage: null,
            offers: offers
        })),
);

export function reducer(state: OfferState | undefined, action: Action) {
    return offerReducer(state, action);
}