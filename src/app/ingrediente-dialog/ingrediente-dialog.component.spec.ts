import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteDialogComponent } from './ingrediente-dialog.component';

describe('IngredienteDialogComponent', () => {
  let component: IngredienteDialogComponent;
  let fixture: ComponentFixture<IngredienteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredienteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
