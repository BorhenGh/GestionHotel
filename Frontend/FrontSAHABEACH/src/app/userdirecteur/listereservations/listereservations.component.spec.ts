import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListereservationsComponent } from './listereservations.component';

describe('ListereservationsComponent', () => {
  let component: ListereservationsComponent;
  let fixture: ComponentFixture<ListereservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListereservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListereservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
