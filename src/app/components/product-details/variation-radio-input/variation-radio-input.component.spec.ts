import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationRadioInputComponent } from './variation-radio-input.component';

describe('VariationRadioInputComponent', () => {
  let component: VariationRadioInputComponent;
  let fixture: ComponentFixture<VariationRadioInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariationRadioInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariationRadioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
