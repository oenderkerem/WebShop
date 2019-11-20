import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FragrancesComponent } from './fragrances.component';

describe('FragrancesComponent', () => {
  let component: FragrancesComponent;
  let fixture: ComponentFixture<FragrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FragrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FragrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
