import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementDetailsInfoComponent } from './annoucement-details-info.component';

describe('AnnoucementDetailsInfoComponent', () => {
  let component: AnnoucementDetailsInfoComponent;
  let fixture: ComponentFixture<AnnoucementDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementDetailsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
