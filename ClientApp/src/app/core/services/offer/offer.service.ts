import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../../../features/offer/models/offer';
import { API_URLS } from '../../constants/api-urls';
import { HttpClient } from '@angular/common/http';
import { publishLast, refCount, delay } from 'rxjs/operators';

@Injectable()
export class OfferService {
    private baseUrl: string = 'https://plexure-angular-demo.azurewebsites.net';

    constructor(private http: HttpClient) {
    }

    public getOffers(): Observable<Offer[]> {
      console.log("###");
        return this.http.get<Offer[]>(this.baseUrl + API_URLS.getOffers).pipe(
            delay(1000), //Added to make loading indicator visible
            publishLast(),
            refCount()
        );
    }

     public createOffer(newOffer: Offer): Observable<any> {
        let url = '/api/Offer';

        return this.http.post(url, newOffer, { observe: 'response' });
     }
}
