import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedeschambresComponent } from './listedeschambres.component';

describe('ListedeschambresComponent', () => {
  let component: ListedeschambresComponent;
  let fixture: ComponentFixture<ListedeschambresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedeschambresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedeschambresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
