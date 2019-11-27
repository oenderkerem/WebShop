import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaIconLinkComponent } from './social-media-icon-link.component';

describe('SocialMediaIconLinkComponent', () => {
  let component: SocialMediaIconLinkComponent;
  let fixture: ComponentFixture<SocialMediaIconLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaIconLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaIconLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
