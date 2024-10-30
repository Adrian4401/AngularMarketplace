import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementDetailsContainerComponent } from './annoucement-details-container.component';

describe('AnnoucementDetailsContainerComponent', () => {
  let component: AnnoucementDetailsContainerComponent;
  let fixture: ComponentFixture<AnnoucementDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementDetailsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
