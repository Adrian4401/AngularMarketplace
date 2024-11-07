import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementDetailsSidebarComponent } from './annoucement-details-sidebar.component';

describe('AnnoucementDetailsSidebarComponent', () => {
  let component: AnnoucementDetailsSidebarComponent;
  let fixture: ComponentFixture<AnnoucementDetailsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoucementDetailsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoucementDetailsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
