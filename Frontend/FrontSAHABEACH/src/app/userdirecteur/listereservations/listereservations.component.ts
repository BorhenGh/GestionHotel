import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';

import { SharedServiceService } from 'src/app/services/shared-service.service';
import * as alertifyjs from 'alertifyjs';

import * as jspdf from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-listereservations',
  templateUrl: './listereservations.component.html',
  styleUrls: ['./listereservations.component.css']
})
export class ListereservationsComponent {
  ListReserTablDet:any=[];
  ListReservationsDe:any=[];
  ListeReserSalleDet: any = [];
  editmode:boolean=false;
  constructor(private service:SharedServiceService,private dialog:MatDialog){
}
ngOnInit(): void {

  this.getAllReservationsDeta();
  this.getAllReservationdetails();
  this.getAllSalleDet();

this.service.RequiredRefresh.subscribe(res=>{

this.getAllReservationsDeta();
this.getAllReservationdetails();
this.getAllSalleDet();

})

}
getAllReservationdetails(){

  this.service.getAllResernum().subscribe(data=>{
       this.ListReservationsDe=data;
     })
   }
getAllReservationsDeta(){
  this.service.getAllReserTablesesdet().subscribe(data=>{
    this.ListReserTablDet=data;
  })
}
getAllSalleDet() {
  this.service.getAllResersallesdet().subscribe(data => {
    this.ListeReserSalleDet = data;
  })
}
generatePdfC() {
  // Make the HTTP GET request to get the data for the PDF
  this.service.getAllResernum().subscribe(articles => {
    // Create the PDF document
    const doc = new jspdf.jsPDF();
    doc.text('Liste des réservations des Chambres', 10, 10);
    

    // Add a table to the PDF
    const table = articles.map(article => [article.t3.nom,article.t1.date_reser,article.t1.nombreAdultes,article.t1.nombreEnfants,article.t2.numChambre,article.t2.type,article.t2.prix]);
    doc.autoTable({ head: [['Nom ', ' Date réservation ' ,' Nombre des adultes ', 'Nombre des enfants ' , ' Num Chambre ',' Type ',' Prix en Dinnars ']], body: table  ,styles: {
      cell: { fontSize: 8 }
    } });

    // Download the PDF
    doc.save('ReservationChambres.pdf');
  });
}
generatePdf() {
  // Make the HTTP GET request to get the data for the PDF
  this.service.getAllReserTablesesdet().subscribe(articles => {
    // Create the PDF document
    const doc = new jspdf.jsPDF();
    doc.text('Liste des réservations des tables', 10, 10);

    // Add a table to the PDF
    const table = articles.map(article => [article.t3.nom, article.t1.date_reser, article.t1.nombrePersonnes, article.t2.type, article.t2.numTable, article.t2.prix]);
    doc.autoTable({ head: [['Nom Client', 'Date réservation','Nombre des peronnes', 'Type de la table','Numéro Table','Prix en Dinnars']], body: table });

    // Download the PDF
    doc.save('ReservationTables.pdf');
  });
}
generatePdfS() {
  // Make the HTTP GET request to get the data for the PDF
  this.service.getAllResersallesdet().subscribe(articles => {
    // Create the PDF document
    const doc = new jspdf.jsPDF();
    doc.text('Liste des réservations des salles', 10, 10);

    // Add a table to the PDF
    const table = articles.map(article => [article.t3.nom,article.t1.date_reser,article.t1.nombrePersonnes,article.t2.type,article.t2.prix]);
    doc.autoTable({ head: [['Nom Client', 'Date réservation','Nombre des peronnes', 'Type de la salle','Prix']], body: table });

    // Download the PDF
    doc.save('ReservationSalles.pdf');
  });
}

}
