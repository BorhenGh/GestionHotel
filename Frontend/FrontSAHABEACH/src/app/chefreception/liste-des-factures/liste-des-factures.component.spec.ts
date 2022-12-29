import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesFacturesComponent } from './liste-des-factures.component';

describe('ListeDesFacturesComponent', () => {
  let component: ListeDesFacturesComponent;
  let fixture: ComponentFixture<ListeDesFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesFacturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
