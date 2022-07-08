import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightModel } from './flight.model';

describe('FlightModel', () => {
  let component: FlightModel;
  let fixture: ComponentFixture<FlightModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
