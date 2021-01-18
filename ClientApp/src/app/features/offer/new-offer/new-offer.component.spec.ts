import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewOfferComponent } from './new-offer.component';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { OfferService } from '../../../core/services/offer/offer.service';

describe('TestComponent', () => {
  let component: NewOfferComponent;
  let fixture: ComponentFixture<NewOfferComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        NewOfferComponent 
      ],
      imports: [
        SharedModule,        
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      providers: [
        Router,
        OfferService,
        TranslateService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when title is empty', () => {
    let title = component.newOfferForm.controls['title'];

    
    //fixture.detectChanges();

    expect(component.newOfferForm.valid).toBeFalsy();
  });
});