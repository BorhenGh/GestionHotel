import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTablesComponent } from './add-edit-tables.component';

describe('AddEditTablesComponent', () => {
  let component: AddEditTablesComponent;
  let fixture: ComponentFixture<AddEditTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
