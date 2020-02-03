import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSignComponent } from './loading-sign.component';

describe('LoadingSignComponent', () => {
  let component: LoadingSignComponent;
  let fixture: ComponentFixture<LoadingSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
