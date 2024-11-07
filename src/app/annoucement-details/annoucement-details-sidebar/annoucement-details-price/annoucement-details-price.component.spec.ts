import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementDetailsPriceComponent } from './annoucement-details-price.component';

describe('AnnoucementDetailsPriceComponent', () => {
  let component: AnnoucementDetailsPriceComponent;
  let fixture: ComponentFixture<AnnoucementDetailsPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementDetailsPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementDetailsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
