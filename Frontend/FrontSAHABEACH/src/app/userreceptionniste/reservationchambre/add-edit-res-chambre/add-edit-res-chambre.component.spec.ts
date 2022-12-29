import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditResChambreComponent } from './add-edit-res-chambre.component';

describe('AddEditResChambreComponent', () => {
  let component: AddEditResChambreComponent;
  let fixture: ComponentFixture<AddEditResChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditResChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditResChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
