import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeallistComponent } from './meallist.component';

describe('MeallistComponent', () => {
  let component: MeallistComponent;
  let fixture: ComponentFixture<MeallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeallistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
