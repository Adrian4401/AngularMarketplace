import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementLargeComponent } from './annoucement-large.component';

describe('AnnoucementLargeComponent', () => {
  let component: AnnoucementLargeComponent;
  let fixture: ComponentFixture<AnnoucementLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
