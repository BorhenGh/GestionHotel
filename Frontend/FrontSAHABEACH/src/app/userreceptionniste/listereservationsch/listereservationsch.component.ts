import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { AddEditResChambreComponent } from '../reservationchambre/add-edit-res-chambre/add-edit-res-chambre.component';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import * as alertifyjs from 'alertifyjs';
import { ReservChambre } from 'src/app/Models/ReservChambre';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
@Component({
  selector: 'app-listereservationsch',
  templateUrl: './listereservationsch.component.html',
  styleUrls: ['./listereservationsch.component.css']
})
export class ListereservationschComponent {
  ReservChdata!:ReservChambre
  ListReservations:any=[];
  ListReservationsDe:any=[];
  listchambres:any=[];
  lsc:any=[];
  vfs:any;
  items:any=[];

  editmode:boolean=false;

  constructor(private service:SharedServiceService, private dialog:MatDialog){
   

  }
  ngOnInit(): void {
    this.getAllReservations();
  this.allchambres();
  this.getAllReservationdetails();
this.service.RequiredRefresh.subscribe(res=>{
  this.getAllReservations();
    this.getAllReservationdetails();
})

}


generatePdf() {
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


  getAllReservations(){
    this.service.getAllReservationsch().subscribe(data=>{
      this.ListReservations=data;
    })
  }
  allchambres(){
    this.service.getAllchambres().subscribe(data=>{
      this.listchambres=data;
    })
  }
  getAllReservationdetails(){

 this.service.getAllResernum().subscribe(data=>{
      this.ListReservationsDe=data;
    })
  }
  
   OpenDialog(enteranimation:any,exitanimation:any,id:any){
 this.dialog.open(AddEditResChambreComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width: '500px',
      data:{
        idreserCh:id,
        editmo:this.editmode,

      }
      
      
      
      
      
    })

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
    alertifyjs.confirm("Supprimer Réservation","Voulez vous supprimer la réservation?",()=>{ this.service.supprimerReserch(id).subscribe(del=>{
      this.getAllReservations();
      alertifyjs.success('La réservation est supprimée avec succès');
    })

    },function(){

    })
   
  }

}
