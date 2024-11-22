import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthContainer } from './width-container.component';

describe('WidthContainer', () => {
  let component: WidthContainer;
  let fixture: ComponentFixture<WidthContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidthContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidthContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
