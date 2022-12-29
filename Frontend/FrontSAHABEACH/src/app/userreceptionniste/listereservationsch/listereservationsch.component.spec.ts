import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListereservationschComponent } from './listereservationsch.component';

describe('ListereservationschComponent', () => {
  let component: ListereservationschComponent;
  let fixture: ComponentFixture<ListereservationschComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListereservationschComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListereservationschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
