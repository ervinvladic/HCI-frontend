import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldcardComponent } from './fieldcard.component';

describe('FieldcardComponent', () => {
  let component: FieldcardComponent;
  let fixture: ComponentFixture<FieldcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
