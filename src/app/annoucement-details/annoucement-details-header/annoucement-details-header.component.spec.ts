import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementDetailsHeaderComponent } from './annoucement-details-header.component';

describe('AnnoucementDetailsHeaderComponent', () => {
  let component: AnnoucementDetailsHeaderComponent;
  let fixture: ComponentFixture<AnnoucementDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementDetailsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
