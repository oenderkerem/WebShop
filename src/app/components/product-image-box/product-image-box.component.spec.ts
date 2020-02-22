import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageBoxComponent } from './product-image-box.component';

describe('ProductImageBoxComponent', () => {
  let component: ProductImageBoxComponent;
  let fixture: ComponentFixture<ProductImageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
