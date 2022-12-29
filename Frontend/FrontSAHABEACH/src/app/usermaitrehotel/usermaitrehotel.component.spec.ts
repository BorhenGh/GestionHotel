import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermaitrehotelComponent } from './usermaitrehotel.component';

describe('UsermaitrehotelComponent', () => {
  let component: UsermaitrehotelComponent;
  let fixture: ComponentFixture<UsermaitrehotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermaitrehotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermaitrehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
