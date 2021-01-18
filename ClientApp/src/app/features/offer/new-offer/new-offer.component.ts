import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Offer } from '../models/offer';
import { OfferRespawnStartDateValidator, OfferDateValidator } from '../validators/NewOfferValidator';

import { OfferService } from '../../../core/services/offer/offer.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss']
})
export class NewOfferComponent implements OnInit {

  public newOffer: Offer;
  public newOfferForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private offerService: OfferService
  ) {
    this.newOffer = new Offer();
    this.newOfferForm = formBuilder.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'startDateTime': [new Date(), Validators.required],
      'endDateTime': [null, Validators.required],
      'isRespawningOffer': [false, Validators.required],
      'respawnStartTime': [null]
    },
    {
      validators: [
        OfferRespawnStartDateValidator, 
        OfferDateValidator
      ]
    });
  }

  ngOnInit(): void {
  }

  create(formValue) {
    this.newOffer.id = 0;
    this.newOffer.title = formValue.title;
    this.newOffer.description = formValue.description;
    this.newOffer.startDateTime = formValue.startDateTime;
    this.newOffer.endDateTime = formValue.endDateTime;
    this.newOffer.isRespawningOffer = formValue.isRespawningOffer;
    this.newOffer.respawnStartTime = formValue.respawnStartTime;
    this.offerService.createOffer(this.newOffer).subscribe(res => {
      if (res.status == 200) {
        this.router.navigate(['/offers/offerlist']);    
      }
    });
  }

  cancel() {
    this.router.navigate(['/offers/offerlist']);
  }
}
