import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTabComponent } from './add-edit-tab.component';

describe('AddEditTabComponent', () => {
  let component: AddEditTabComponent;
  let fixture: ComponentFixture<AddEditTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
