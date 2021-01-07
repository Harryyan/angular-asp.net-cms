import { Component, OnInit } from '@angular/core';
import { OfferFacade } from '../store/offer.facade';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public hasError$: Observable<boolean>;
  public offers$: Observable<Offer[]>;

  constructor(private offerFacade: OfferFacade) { }

  ngOnInit(): void {
    this.isLoading$ = this.offerFacade.getisLoading();
    this.hasError$ = this.offerFacade.getHasError();
    this.offers$ = this.offerFacade.getOffers();
    this.offerFacade.loadOffers();
  }

}
