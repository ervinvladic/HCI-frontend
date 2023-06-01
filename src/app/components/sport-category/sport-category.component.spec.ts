import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCategoryComponent } from './sport-category.component';

describe('SportCategoryComponent', () => {
  let component: SportCategoryComponent;
  let fixture: ComponentFixture<SportCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
