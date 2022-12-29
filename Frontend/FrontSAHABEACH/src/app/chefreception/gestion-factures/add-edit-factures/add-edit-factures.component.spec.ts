import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFacturesComponent } from './add-edit-factures.component';

describe('AddEditFacturesComponent', () => {
  let component: AddEditFacturesComponent;
  let fixture: ComponentFixture<AddEditFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFacturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
