import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  message!: string;
  showChatbot = false;
  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    this.chatbotService.sendMessage(this.message)
      .subscribe(response => {
        // Afficher la réponse du chatbot dans le popup de message
      });
  }
  closeChatbot() {
    this.showChatbot = false;
  }

}
