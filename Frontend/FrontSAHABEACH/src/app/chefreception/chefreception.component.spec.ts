import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefreceptionComponent } from './chefreception.component';

describe('ChefreceptionComponent', () => {
  let component: ChefreceptionComponent;
  let fixture: ComponentFixture<ChefreceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefreceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefreceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
