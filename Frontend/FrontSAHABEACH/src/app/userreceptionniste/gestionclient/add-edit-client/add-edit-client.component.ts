import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { Inject } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.css'],


})



export class AddEditClientComponent  {
  @ViewChild('usersForm') form!: NgForm;
  desdata: any;
  respdata: any;
  editdata: any;
  editmode:boolean=false;
  constructor(private service: SharedServiceService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogref: MatDialogRef<AddEditClientComponent>) { }
  ngOnInit(): void {
    this.editmode=this.data.editmo;
    if (this.data.clientid != null && this.data.clientid != '') {

      this.service.getclientById(this.data.clientid).subscribe(item => {
        this.editdata = item;
        this.Reactiveform.setValue({
          idclient:this.editdata.idclient,
          Nom: this.editdata.nom,
          Age: this.editdata.age,
          Types_pieces: this.editdata.types_pieces,
          numPiece: this.editdata.numPiece,
          Adresse: this.editdata.adresse,
          télephone: this.editdata.télephone,
          date_arrivee: this.editdata.date_arrivee,
          date_depart: this.editdata.date_depart
        })


      });



    }
  }
  Reactiveform = new FormGroup({
    idclient: new FormControl({ value: 0, disabled: true }),
    Nom: new FormControl("",Validators.required),
    Age: new FormControl("", Validators.required),
    Types_pieces: new FormControl("", Validators.required),
    numPiece:  new FormControl('', [
      Validators.pattern(/^\d{8}$/)
    ])
  ,
    Adresse: new FormControl("", Validators.required),
    télephone:  new FormControl('', [
      Validators.pattern(/^(\+90|91|92|93|94|95|96|97|98|99|20|21|22|23|24|25|26|27|28|29|50|51|52|53|54|55|56|57|58|59|71|72|73|74|75)?\d{8}$/)
    ]),

    date_arrivee: new FormControl(new Date()),
    date_depart: new FormControl(new Date()),
  })
  getClientFormData() {
    if (this.Reactiveform.valid) {
      const editid = this.Reactiveform.getRawValue().idclient;
      if (editid!=null){
        this.service.UpdateClient(editid,this.Reactiveform.getRawValue()).subscribe(result=>{

          this.dialogref.close();
        })
      }
      this.service.saveClient(this.Reactiveform.getRawValue()).subscribe(result => {
        this.respdata = result;
        if (this.respdata) {
          this.dialogref.close();
          alertifyjs.success('Bravo! Le client est enregistré avec succès');
        }

      });

    } else {
      alertifyjs.error("Merci d'entrer des données valides pour client");


    }

  }


}


