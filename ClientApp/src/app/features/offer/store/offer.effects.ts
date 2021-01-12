import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as actions from './offer.actions';
import { OfferService } from '../../../core/services/offer/offer.service';

@Injectable()
export class OfferEffects {
    constructor(private dataService: OfferService, private actions$: Actions) { }

    @Effect()
    loadOffersEffect$: Observable<Action> = this.actions$.pipe(
        ofType(actions.LoadOffersAction),
        switchMap(() =>
            this.dataService
                .getOffers()
                .pipe(
                    map(offers => actions.LoadOffersSuccessAction({offers})),
                    catchError(error =>
                         observableOf(actions.LoadOffersFailureAction({ errorMessage: error.message }))
                    )
                )
        )
    );
}