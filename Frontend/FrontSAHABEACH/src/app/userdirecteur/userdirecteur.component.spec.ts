import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdirecteurComponent } from './userdirecteur.component';

describe('UserdirecteurComponent', () => {
  let component: UserdirecteurComponent;
  let fixture: ComponentFixture<UserdirecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdirecteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
