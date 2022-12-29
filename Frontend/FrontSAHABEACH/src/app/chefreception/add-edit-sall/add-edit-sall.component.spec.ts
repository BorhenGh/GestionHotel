import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSallComponent } from './add-edit-sall.component';

describe('AddEditSallComponent', () => {
  let component: AddEditSallComponent;
  let fixture: ComponentFixture<AddEditSallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
