import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationchambreComponent } from './reservationchambre.component';

describe('ReservationchambreComponent', () => {
  let component: ReservationchambreComponent;
  let fixture: ComponentFixture<ReservationchambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationchambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
