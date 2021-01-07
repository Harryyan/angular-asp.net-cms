import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { LoadOffersAction } from './offer.actions';
import { getOffersSelector, getIsLoadingSelector, getHasErrorSelector } from './offer.selectors';
import { Offer } from '../models/offer';
import { Observable } from 'rxjs';

@Injectable()
export class OfferFacade {
    constructor(private store$: Store<{}>) {
    }

    public loadOffers(): void {
        this.store$.dispatch(LoadOffersAction());
    }

    public getOffers(): Observable<Offer[]> {
        return this.store$.pipe(select(getOffersSelector));
    }

    public getisLoading(): Observable<boolean> {
        return this.store$.pipe(select(getIsLoadingSelector));
    }

    public getHasError(): Observable<boolean> {
        return this.store$.pipe(select(getHasErrorSelector));
    }
}
