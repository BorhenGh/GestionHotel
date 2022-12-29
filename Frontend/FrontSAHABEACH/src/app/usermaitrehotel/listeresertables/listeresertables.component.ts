import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { AddEditTablesComponent } from '../add-edit-tables/add-edit-tables.component';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import * as alertifyjs from 'alertifyjs';
import { Tables } from 'src/app/Models/Tables';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
@Component({
  selector: 'app-listeresertables',
  templateUrl: './listeresertables.component.html',
  styleUrls: ['./listeresertables.component.css']
})
export class ListeresertablesComponent {
  ListReservations:any=[];
  ListReserTablDet:any=[];
  editmode:boolean=false;
  constructor(private service:SharedServiceService,private dialog:MatDialog){


  }
  ngOnInit(): void {
    this.getAllReservations();
    this.getAllReservationsDeta();
 
this.service.RequiredRefresh.subscribe(res=>{
  this.getAllReservations();
  this.getAllReservationsDeta();
})

}
OpenDialog(enteranimation:any,exitanimation:any,id:any){
  this.dialog.open(AddEditTablesComponent,{
       enterAnimationDuration:enteranimation,
       exitAnimationDuration:exitanimation,
       width: '500px',
       data:{
         idtable:id,
         editmo:this.editmode,
 
       }
       
       
       
       
       
     })
 
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

   update(id:any){
    this.editmode=true;
   this.OpenDialog('1000ms','600ms',id)
   this.getAllReservations();
   

  }
  add(){
    this.editmode=false;
    this.OpenDialog('1000ms','600ms','')
    this.getAllReservations();
    
  }
  supprimer(id:any){
    alertifyjs.confirm("Supprimer Réservation","Voulez vous supprimer la réservation?",()=>{ this.service.supprimerResert(id).subscribe(del=>{
      this.getAllReservations();
      alertifyjs.success('La réservation est supprimée avec succès');
    })

    },function(){

    })
   
  }
  getAllReservations(){
    this.service.getAllReservTable().subscribe(data=>{
      this.ListReservations=data;
    })
  }
  getAllReservationsDeta(){
    this.service.getAllReserTablesesdet().subscribe(data=>{
      this.ListReserTablDet=data;
    })
  }
}
