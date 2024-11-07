import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementDetailsImagesComponent } from './annoucement-details-images.component';

describe('AnnoucementDetailsImagesComponent', () => {
  let component: AnnoucementDetailsImagesComponent;
  let fixture: ComponentFixture<AnnoucementDetailsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementDetailsImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementDetailsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
