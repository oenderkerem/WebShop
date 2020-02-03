import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedVariationItemComponent } from './detailed-variation-item.component';

describe('DetailedVariationItemComponent', () => {
  let component: DetailedVariationItemComponent;
  let fixture: ComponentFixture<DetailedVariationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedVariationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedVariationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
