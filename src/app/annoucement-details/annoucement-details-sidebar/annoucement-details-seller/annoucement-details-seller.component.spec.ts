import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementDetailsSellerComponent } from './annoucement-details-seller.component';

describe('AnnoucementDetailsSellerComponent', () => {
  let component: AnnoucementDetailsSellerComponent;
  let fixture: ComponentFixture<AnnoucementDetailsSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementDetailsSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementDetailsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
