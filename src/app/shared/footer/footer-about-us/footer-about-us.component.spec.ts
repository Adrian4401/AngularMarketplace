import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAboutUsComponent } from './footer-about-us.component';

describe('FooterAboutUsComponent', () => {
  let component: FooterAboutUsComponent;
  let fixture: ComponentFixture<FooterAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
