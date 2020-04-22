import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicShopComponent } from './basic-shop.component';

describe('BasicShopComponent', () => {
  let component: BasicShopComponent;
  let fixture: ComponentFixture<BasicShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
