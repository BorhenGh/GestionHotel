import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UserdirecteurComponent } from './userdirecteur/userdirecteur.component';

import { ListereservationschComponent } from './userreceptionniste/listereservationsch/listereservationsch.component';
import { ListeclientsComponent } from './userreceptionniste/listeclients/listeclients.component';
import { UserreceptionnisteComponent } from './userreceptionniste/userreceptionniste.component';
import { ListereservationsComponent } from './userdirecteur/listereservations/listereservations.component';
import { ListefacturesComponent } from './userdirecteur/listefactures/listefactures.component';
import { ChefreceptionComponent } from './chefreception/chefreception.component';
import { GestionChambreComponent } from './chefreception/gestion-chambre/gestion-chambre.component';
import { GestionFacturesComponent } from './chefreception/gestion-factures/gestion-factures.component';

import { ListeDesFacturesComponent } from './chefreception/liste-des-factures/liste-des-factures.component';
import { ListedeschambresComponent } from './chefreception/listedeschambres/listedeschambres.component';
import { UsermaitrehotelComponent } from './usermaitrehotel/usermaitrehotel.component';
import { ListeresersallesComponent } from './usermaitrehotel/listeresersalles/listeresersalles.component';
import { ListeresertablesComponent } from './usermaitrehotel/listeresertables/listeresertables.component';
import { ListedessallesComponent } from './chefreception/listedessalles/listedessalles.component';
import { ListedestablesComponent } from './chefreception/listedestables/listedestables.component';
const routes: Routes = [
  {path:'',component:AccueilComponent},
 {path:'authen',component:AuthentificationComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'userdirector',component:UserdirecteurComponent},

  {path:'listereservationch',component:ListereservationschComponent},
  {path:'listeClients',component:ListeclientsComponent},
  {path:'userRecep',component:UserreceptionnisteComponent},
  {path:'listereservation',component:ListereservationsComponent},
  {path:'listeresefacture',component:ListefacturesComponent},
  {path:'userchefreception',component:ChefreceptionComponent},
  {path:'listechambres',component:ListedeschambresComponent},
  {path:'listefactures',component:ListeDesFacturesComponent},
  {path:'usermaitrehotel',component:UsermaitrehotelComponent},
  {path:'listetables',component:ListeresertablesComponent},
  {path:'listSalles',component:ListeresersallesComponent},
  {path:'listetab',component:ListedestablesComponent},
  {path:'listSall',component:ListedessallesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
