import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeresertablesComponent } from './listeresertables.component';

describe('ListeresertablesComponent', () => {
  let component: ListeresertablesComponent;
  let fixture: ComponentFixture<ListeresertablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeresertablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeresertablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
