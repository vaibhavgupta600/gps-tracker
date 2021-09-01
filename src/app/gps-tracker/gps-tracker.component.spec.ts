import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsTrackerComponent } from './gps-tracker.component';

describe('GpsTrackerComponent', () => {
  let component: GpsTrackerComponent;
  let fixture: ComponentFixture<GpsTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
