import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInformationsComponent } from './footer-informations.component';

describe('FooterInformationsComponent', () => {
  let component: FooterInformationsComponent;
  let fixture: ComponentFixture<FooterInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterInformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
