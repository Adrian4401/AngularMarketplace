import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementSmallComponent } from './annoucement-small.component';

describe('AnnoucementSmallComponent', () => {
  let component: AnnoucementSmallComponent;
  let fixture: ComponentFixture<AnnoucementSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
