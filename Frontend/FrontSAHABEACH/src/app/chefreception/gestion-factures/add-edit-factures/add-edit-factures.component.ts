import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-edit-factures',
  templateUrl: './add-edit-factures.component.html',
  styleUrls: ['./add-edit-factures.component.css']
})
export class AddEditFacturesComponent {
  editdata: any;
  respdata:any;
  editmode:boolean=false;
  listclients:any=[];
  constructor(private service: SharedServiceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditFacturesComponent>) { }
  ngOnInit(): void {
    this.editmode=this.d.editmo;
    this.allclients()
    console.log(this.editmode);

    if (this.d.idfacture != null && this.d.idfacture != '') {


    this.service.getFactureById(this.d.idfacture).subscribe(respponse=>{
this.editdata=respponse;
this.Reactiveform.setValue({
  idfacture:this.editdata.idfacture,

  date_facture: this.editdata.date_facture,
  montant: this.editdata.montant,
  
 
  idclient: this.editdata.idclient,

  
});


    })

    } 

  } 
  Reactiveform = new FormGroup({
    idfacture:new FormControl({value:0,disabled:true}),
    
    date_facture: new FormControl(new Date()),
     
    montant: new FormControl("", Validators.required),
    idclient: new FormControl("", Validators.required),
  
    }) 
    allclients() {
      this.service.getAllClients().subscribe(data => {
        this.listclients = data;
      })
    }
    getReservFormData() {
      if (this.Reactiveform.valid) {
        const editid= this.Reactiveform.getRawValue().idfacture;
        if (editid!=null){
          this.service.UpdateFacture(editid,this.Reactiveform.getRawValue()).subscribe(response=>{
          
            this.dialogref.close()
  
            alertifyjs.success('Bravo! Les coordonnées de facture  sont modifiées avec succès');
         
  
          })
     
        
        }
        this.service.savereFacture(this.Reactiveform.getRawValue()).subscribe(result => {
          this.respdata = result;
          if (this.respdata) {
      
            this.dialogref.close()
            alertifyjs.success('Bravo! Les coordonnées de facture  sont  enregistrées avec succès');
      
          }
  
        });
     
  
  
      } else {
        alertifyjs.error("Merci d'entrer des données valides pour réservation");
  
  
      }
  
    }
    

}
