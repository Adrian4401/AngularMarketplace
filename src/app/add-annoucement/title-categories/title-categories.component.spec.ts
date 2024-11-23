import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCategoriesComponent } from './title-categories.component';

describe('TitleCategoriesComponent', () => {
  let component: TitleCategoriesComponent;
  let fixture: ComponentFixture<TitleCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
