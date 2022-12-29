import { Component } from '@angular/core';
import { AddEditSallesComponent } from '../add-edit-salles/add-edit-salles.component';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import * as alertifyjs from 'alertifyjs';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
@Component({
  selector: 'app-listeresersalles',
  templateUrl: './listeresersalles.component.html',
  styleUrls: ['./listeresersalles.component.css']
})
export class ListeresersallesComponent {
  ListReservations: any = [];
  ListeReserSalleDet: any = [];
  editmode: boolean = false;



  constructor(private service: SharedServiceService, private dialog: MatDialog) {


  }
  generatePdf() {
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




  ngOnInit(): void {

    this.getAllSalleDet();
    this.getAllReservations();
    this.service.RequiredRefresh.subscribe(res => {
      this.getAllReservations();
      this.getAllSalleDet();
    })

  }
  OpenDialog(enteranimation: any, exitanimation: any, id: any) {
    this.dialog.open(AddEditSallesComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '500px',
      data: {
        idsalle: id,
        editmo: this.editmode,

      }





    })

  }
  update(id: any) {
    this.editmode = true;
    this.OpenDialog('1000ms', '600ms', id)
    this.getAllReservations();
    this.getAllSalleDet();

  }
  add() {
    this.editmode = false;
    this.OpenDialog('1000ms', '600ms', '')
    this.getAllReservations();

  }
  supprimer(id: any) {
    alertifyjs.confirm("Supprimer Réservation", "Voulez vous supprimer la réservation?", () => {
      this.service.supprimerReserSalle(id).subscribe(del => {
        this.getAllReservations();
        alertifyjs.success('La réservation est supprimée avec succès');
      })

    }, function () {

    })

  }
  getAllReservations() {
    this.service.getAllReservationsSalles().subscribe(data => {
      this.ListReservations = data;
    })
  }
  getAllSalleDet() {
    this.service.getAllResersallesdet().subscribe(data => {
      this.ListeReserSalleDet = data;
    })
  }

}
