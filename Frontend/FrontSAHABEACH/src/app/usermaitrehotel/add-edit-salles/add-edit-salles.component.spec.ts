import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSallesComponent } from './add-edit-salles.component';

describe('AddEditSallesComponent', () => {
  let component: AddEditSallesComponent;
  let fixture: ComponentFixture<AddEditSallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
