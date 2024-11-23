import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDescComponent } from './photos-desc.component';

describe('PhotosDescComponent', () => {
  let component: PhotosDescComponent;
  let fixture: ComponentFixture<PhotosDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
