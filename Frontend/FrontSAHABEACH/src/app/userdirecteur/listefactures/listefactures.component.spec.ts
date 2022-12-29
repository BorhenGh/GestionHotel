import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefacturesComponent } from './listefactures.component';

describe('ListefacturesComponent', () => {
  let component: ListefacturesComponent;
  let fixture: ComponentFixture<ListefacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefacturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListefacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
