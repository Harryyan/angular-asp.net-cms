import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Offer } from '../models/offer';
import { NewOfferValidator } from '../validators/NewOfferValidator';

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
  ) {
    this.newOffer = new Offer();
    this.newOfferForm = formBuilder.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'startDateTime': [new Date(), Validators.required],
      'endDateTime': [new Date(), Validators.required],
      'isRespawningOffer': [false, Validators.required],
      'respawnStartTime': [null]
    },
    {
      validators: [NewOfferValidator]
    });
  }

  ngOnInit(): void {
  }

  create(formValue) {
    console.log(formValue);
  }

  cancel() {
    console.log("Cancel create offer");
  }
}
