import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatbotModalContentComponent } from '../chatbot-modal-content/chatbot-modal-content.component';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  constructor(private modalService: NgbModal) {}
  showChatbot = false;
  openChatbot(){
    this.showChatbot = true;
  }
  openModal() {
    console.log('Ouverture du modal de chatbot');
    const modalRef = this.modalService.open(ChatbotModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }

}
