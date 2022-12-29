import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedestablesComponent } from './listedestables.component';

describe('ListedestablesComponent', () => {
  let component: ListedestablesComponent;
  let fixture: ComponentFixture<ListedestablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedestablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedestablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
