import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalmeallistComponent } from './totalmeallist.component';

describe('TotalmeallistComponent', () => {
  let component: TotalmeallistComponent;
  let fixture: ComponentFixture<TotalmeallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalmeallistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalmeallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
