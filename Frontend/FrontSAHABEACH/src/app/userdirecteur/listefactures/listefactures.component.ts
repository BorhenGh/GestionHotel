import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';

import { SharedServiceService } from 'src/app/services/shared-service.service';

import * as alertifyjs from 'alertifyjs';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-listefactures',
  templateUrl: './listefactures.component.html',
  styleUrls: ['./listefactures.component.css']
})
export class ListefacturesComponent {
  ListfacturesCl:any=[];
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

    this.getallfacturedetal();
 
this.service.RequiredRefresh.subscribe(res=>{

  this.getallfacturedetal();
})

}
getallfacturedetal(){
  this.service.getAllfacturesdet().subscribe(data=>{
    this.ListfacturesCl=data;
  })

}


}
