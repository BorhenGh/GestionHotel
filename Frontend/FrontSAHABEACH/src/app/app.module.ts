import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { UserdirecteurComponent } from './userdirecteur/userdirecteur.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthentificationComponent } from './authentification/authentification.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { UserreceptionnisteComponent } from './userreceptionniste/userreceptionniste.component';
import { ReservationchambreComponent } from './userreceptionniste/reservationchambre/reservationchambre.component';
import { GestionclientComponent } from './userreceptionniste/gestionclient/gestionclient.component';
import { AddEditResChambreComponent } from './userreceptionniste/reservationchambre/add-edit-res-chambre/add-edit-res-chambre.component';
import { AddEditClientComponent } from './userreceptionniste/gestionclient/add-edit-client/add-edit-client.component';
import { ListereservationschComponent } from './userreceptionniste/listereservationsch/listereservationsch.component';
import { ListeclientsComponent } from './userreceptionniste/listeclients/listeclients.component';
import { ListereservationsComponent } from './userdirecteur/listereservations/listereservations.component';
import { ListefacturesComponent } from './userdirecteur/listefactures/listefactures.component';
import { ChefreceptionComponent } from './chefreception/chefreception.component';
import { GestionChambreComponent } from './chefreception/gestion-chambre/gestion-chambre.component';
import { GestionFacturesComponent } from './chefreception/gestion-factures/gestion-factures.component';

import { ListeDesFacturesComponent } from './chefreception/liste-des-factures/liste-des-factures.component';
import { AddEditChambreComponent } from './chefreception/gestion-chambre/add-edit-chambre/add-edit-chambre.component';
import { AddEditFacturesComponent } from './chefreception/gestion-factures/add-edit-factures/add-edit-factures.component';
import { ListedeschambresComponent } from './chefreception/listedeschambres/listedeschambres.component';
import { UsermaitrehotelComponent } from './usermaitrehotel/usermaitrehotel.component';
import { AddEditTablesComponent } from './usermaitrehotel/add-edit-tables/add-edit-tables.component';
import { AddEditSallesComponent } from './usermaitrehotel/add-edit-salles/add-edit-salles.component';
import { ListeresersallesComponent } from './usermaitrehotel/listeresersalles/listeresersalles.component';
import { ListeresertablesComponent } from './usermaitrehotel/listeresertables/listeresertables.component';
import { ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListedessallesComponent } from './chefreception/listedessalles/listedessalles.component';
import { ListedestablesComponent } from './chefreception/listedestables/listedestables.component';
import { AddEditTabComponent } from './chefreception/add-edit-tab/add-edit-tab.component';
import { AddEditSallComponent } from './chefreception/add-edit-sall/add-edit-sall.component';
import { AddEditFactureComponent } from './chefreception/add-edit-facture/add-edit-facture.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatbotModalContentComponent } from './chatbot-modal-content/chatbot-modal-content.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    UserdirecteurComponent,
    InscriptionComponent,
    AuthentificationComponent,
  
    UserreceptionnisteComponent,
    ReservationchambreComponent,
    GestionclientComponent,
    AddEditResChambreComponent,
    AddEditClientComponent,
    ListereservationschComponent,
    ListeclientsComponent,
    ListereservationsComponent,
    ListefacturesComponent,
    ChefreceptionComponent,
    GestionChambreComponent,
    GestionFacturesComponent,
   
    ListeDesFacturesComponent,
    AddEditChambreComponent,
    AddEditFacturesComponent,
    ListedeschambresComponent,
    UsermaitrehotelComponent,
    AddEditTablesComponent,
    AddEditSallesComponent,
    ListeresersallesComponent,
    ListeresertablesComponent,
    ListedessallesComponent,
    ListedestablesComponent,
    AddEditTabComponent,
    AddEditSallComponent,
    AddEditFactureComponent,
    ChatbotComponent,
    ChatbotModalContentComponent,
   
  


 
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MdbCarouselModule, HttpClientModule, FormsModule, MaterialModule, MatButtonModule, MatIconModule, MatDialogModule,ReactiveFormsModule,BrowserAnimationsModule,NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
