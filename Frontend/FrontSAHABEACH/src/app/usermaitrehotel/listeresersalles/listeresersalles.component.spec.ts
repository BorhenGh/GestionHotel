import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeresersallesComponent } from './listeresersalles.component';

describe('ListeresersallesComponent', () => {
  let component: ListeresersallesComponent;
  let fixture: ComponentFixture<ListeresersallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeresersallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeresersallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
