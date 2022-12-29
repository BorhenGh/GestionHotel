import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreceptionnisteComponent } from './userreceptionniste.component';

describe('UserreceptionnisteComponent', () => {
  let component: UserreceptionnisteComponent;
  let fixture: ComponentFixture<UserreceptionnisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserreceptionnisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserreceptionnisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
