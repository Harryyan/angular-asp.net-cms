import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCalendarComponent } from './offers-calendar.component';

describe('OffersCalendarComponent', () => {
  let component: OffersCalendarComponent;
  let fixture: ComponentFixture<OffersCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
