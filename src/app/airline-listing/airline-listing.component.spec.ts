import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineListingComponent } from './airline-listing.component';

describe('AirlineListingComponent', () => {
  let component: AirlineListingComponent;
  let fixture: ComponentFixture<AirlineListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
