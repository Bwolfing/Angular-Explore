import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateCalculatorComponent } from './estimate-calculator.component';

describe('EstimateCalculatorComponent', () => {
  let component: EstimateCalculatorComponent;
  let fixture: ComponentFixture<EstimateCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
