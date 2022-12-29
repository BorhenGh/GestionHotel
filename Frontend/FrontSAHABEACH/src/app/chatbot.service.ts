
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { of } from 'rxjs';
import { Question } from './Models/Question';
import { SharedServiceService } from './services/shared-service.service';
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
 
  constructor(private service:SharedServiceService) {}
  

  sendMessage(message: string): Observable<string> {
    // Convertir le message en minuscules
    const lowerCaseMessage = message.toLowerCase();
  
    // Envoyer une requête HTTP pour récupérer les questions
    return this.service.getAllquestions().pipe(
      // Parcourir les questions et trouver la réponse correspondante
      map((questions: any) => {
        for (const { question, response } of questions) {
          // Convertir la question en minuscules avant de la comparer au message
          if (lowerCaseMessage === question.toLowerCase()) {
            return response;
          }
        }
        // Si aucune question n'est trouvée, renvoyer une réponse par défaut
        return 'Je ne comprends pas votre question. Pouvez-vous reformuler ?';
      })
    );
  }
}
