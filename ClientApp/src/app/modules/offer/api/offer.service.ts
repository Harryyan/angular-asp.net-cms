import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';
import { API_URLS } from './api-urls';
import { HttpClient } from '@angular/common/http';
import { publishLast, refCount, delay } from 'rxjs/operators';

@Injectable()
export class OfferService {
    private baseUrl: string = 'https://plexure-angular-demo.azurewebsites.net';

    constructor(private http: HttpClient) {
    }

    public getOffers(): Observable<Offer[]> {
        return this.http.get<Offer[]>(this.baseUrl + API_URLS.getOffers).pipe(
            delay(1000), //Added to make loading indicator visible
            publishLast(),
            refCount()
        );
    }
}
