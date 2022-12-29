import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChambreComponent } from './add-edit-chambre.component';

describe('AddEditChambreComponent', () => {
  let component: AddEditChambreComponent;
  let fixture: ComponentFixture<AddEditChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
