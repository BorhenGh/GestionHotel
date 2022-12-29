import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotModalContentComponent } from './chatbot-modal-content.component';

describe('ChatbotModalContentComponent', () => {
  let component: ChatbotModalContentComponent;
  let fixture: ComponentFixture<ChatbotModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
