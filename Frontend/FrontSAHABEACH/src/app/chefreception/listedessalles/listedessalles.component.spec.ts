import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedessallesComponent } from './listedessalles.component';

describe('ListedessallesComponent', () => {
  let component: ListedessallesComponent;
  let fixture: ComponentFixture<ListedessallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedessallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedessallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
