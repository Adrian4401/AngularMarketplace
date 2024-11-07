import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementDetailsDescriptionComponent } from './annoucement-details-description.component';

describe('AnnoucementDetailsDescriptionComponent', () => {
  let component: AnnoucementDetailsDescriptionComponent;
  let fixture: ComponentFixture<AnnoucementDetailsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementDetailsDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
