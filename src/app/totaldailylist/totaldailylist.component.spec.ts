import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldailylistComponent } from './totaldailylist.component';

describe('TotaldailylistComponent', () => {
  let component: TotaldailylistComponent;
  let fixture: ComponentFixture<TotaldailylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotaldailylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotaldailylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
