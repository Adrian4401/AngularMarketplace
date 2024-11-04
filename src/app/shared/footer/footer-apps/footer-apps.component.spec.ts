import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAppsComponent } from './footer-apps.component';

describe('FooterAppsComponent', () => {
  let component: FooterAppsComponent;
  let fixture: ComponentFixture<FooterAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
