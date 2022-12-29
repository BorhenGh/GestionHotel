import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { AddEditFacturesComponent } from '../gestion-factures/add-edit-factures/add-edit-factures.component';
import { SharedServiceService } from 'src/app/services/shared-service.service';

import * as alertifyjs from 'alertifyjs';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
@Component({
  selector: 'app-liste-des-factures',
  templateUrl: './liste-des-factures.component.html',
  styleUrls: ['./liste-des-factures.component.css']
})
export class ListeDesFacturesComponent {
  Listfactures:any=[];
  ListfacturesCl:any=[];
   ListReserTablDet:any=[];
  ListReservationsDe:any=[];
  ListeReserSalleDet: any = [];
  editmode:boolean=false;
  constructor(private service:SharedServiceService,private dialog:MatDialog){


  }
  generatePdf() {
    // Make the HTTP GET request to get the data for the PDF
    this.service.getAllfacturesdet().subscribe(articles => {
      // Create the PDF document
      const doc = new jspdf.jsPDF();
      doc.text('Liste des factures en détails', 10, 10);

      // Add a table to the PDF
      const table = articles.map(article => [article.t2.nom,article.t2.numPiece,article.t1.date_facture,article.t1.montant]);
      doc.autoTable({ head: [['Nom Client', 'Numero pièce','Date de facture', 'Montant']], body: table });

      // Download the PDF
      doc.save('FactureSahaBeach.pdf');
    });
  }


  ngOnInit(): void {
    this.getAllFactures();
    this.getallfacturedetal();
    this.getAllReservationsDeta();
  this.getAllReservationdetails();
  this.getAllSalleDet();
 
this.service.RequiredRefresh.subscribe(res=>{
  this.getAllFactures();
  this.getallfacturedetal();
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
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditFacturesComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '500px',
         data:{
           idfacture:id,
           editmo:this.editmode,
   
         }
         
         
         
         
         
       })
   
     } 
     update(id:any){
      this.editmode=true;
     this.OpenDialog('1000ms','600ms',id)
     this.getAllFactures();
     
  
    }
    getAllFactures(){
      this.service.getAllfactures().subscribe(data=>{
        this.Listfactures=data;
      })
    }
   addclick(){
    this.editmode=false;
    this.OpenDialog('1000ms','600ms','')
    this.getAllFactures();

 
   }
   supprimer(id:any){
    alertifyjs.confirm("Supprimer La Facture","Voulez vous supprimer la Facture?",()=>{ this.service.supprimerfactures(id).subscribe(del=>{
      this.getAllFactures();
      alertifyjs.success('La Facture est supprimée avec succès');
    })
  
    },function(){
  
    })
   
  }
  getallfacturedetal(){
    this.service.getAllfacturesdet().subscribe(data=>{
      this.ListfacturesCl=data;
    })

  }

}
