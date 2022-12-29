import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
@Component({
  selector: 'app-chatbot-modal-content',
  templateUrl: './chatbot-modal-content.component.html',
  styleUrls: ['./chatbot-modal-content.component.css']
})
export class ChatbotModalContentComponent {
  message!: string;
  conversation: string[] = [];
  questions!: string[];
  reponse!: string;

  constructor(private chatbotService: ChatbotService) {}
  sendMessage() {
    // Ajouter le message à la conversation
    this.conversation.push(`Vous : ${this.message}`);
    // Parcourez les questions et les réponses pour trouver la réponse correspondante
    this.chatbotService.sendMessage(this.message)
    .subscribe(response => {
      console.log('Réponse du chatbot :', response);
      // Ajouter la réponse du chatbot à la conversation
      this.conversation.push(`Chatbot : ${response}`);
      // Vider la zone de texte du message
      this.message = '';
    });
  }

}
