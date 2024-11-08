import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementDetailsProposedComponent } from './annoucement-details-proposed.component';

describe('AnnoucementDetailsProposedComponent', () => {
  let component: AnnoucementDetailsProposedComponent;
  let fixture: ComponentFixture<AnnoucementDetailsProposedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementDetailsProposedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementDetailsProposedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
