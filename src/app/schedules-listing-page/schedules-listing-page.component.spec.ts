import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesListingPageComponent } from './schedules-listing-page.component';

describe('SchedulesListingPageComponent', () => {
  let component: SchedulesListingPageComponent;
  let fixture: ComponentFixture<SchedulesListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulesListingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
