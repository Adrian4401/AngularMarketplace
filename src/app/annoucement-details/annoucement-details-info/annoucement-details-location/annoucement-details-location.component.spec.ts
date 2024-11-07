import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementDetailsLocationComponent } from './annoucement-details-location.component';

describe('AnnoucementDetailsLocationComponent', () => {
  let component: AnnoucementDetailsLocationComponent;
  let fixture: ComponentFixture<AnnoucementDetailsLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementDetailsLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementDetailsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
