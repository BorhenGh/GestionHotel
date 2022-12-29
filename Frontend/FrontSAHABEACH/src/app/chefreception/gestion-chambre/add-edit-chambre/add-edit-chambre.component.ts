import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-add-edit-chambre',
  templateUrl: './add-edit-chambre.component.html',
  styleUrls: ['./add-edit-chambre.component.css']
})
export class AddEditChambreComponent {
  editdata: any;
  respdata:any;
  editmode:boolean=false;
  constructor(private service: SharedServiceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditChambreComponent>) { }
  ngOnInit(): void {
    this.editmode=this.d.editmo;
    console.log(this.editmode);

    if (this.d.idchambre != null && this.d.idchambre != '') {


    this.service.getChambreById(this.d.idchambre).subscribe(respponse=>{
this.editdata=respponse;
this.Reactiveform.setValue({
  idchambre:this.editdata.idchambre,
  numChambre:this.editdata.numChambre,
  nbrePlaces: this.editdata.nbrePlaces,
 
  etat: this.editdata.etat,
 
  type: this.editdata.type,
  prix: this.editdata.prix,
  
});


    })

    } 

  }
  Reactiveform = new FormGroup({
    idchambre:new FormControl({value:0,disabled:true}),
    numChambre:new FormControl("", Validators.required),
    nbrePlaces: new FormControl("", Validators.required),
     
    etat: new FormControl("", Validators.required),
     
    type: new FormControl("", Validators.required),
    prix: new FormControl("", Validators.required),
  
    }) 
    SaveChambreData(){
      if (this.Reactiveform.valid) {
        const editid= this.Reactiveform.getRawValue().idchambre;
        if (editid!=null){
          this.service.UpdateChambre(editid,this.Reactiveform.getRawValue()).subscribe(response=>{
          
            this.dialogref.close()
  
            alertifyjs.success('Bravo! Les coordonées de la chambre  est modifiée avec succès');
         
  
          })
     
        
        }
        this.service.saveChambre(this.Reactiveform.getRawValue()).subscribe(result => {
          this.respdata = result;
          if (this.respdata) {
      
            this.dialogref.close()
            alertifyjs.success('Bravo! La Chambre est enregistrée avec succès');
      
          }
  
        });
     
  
  
      } else {
        alertifyjs.error("Merci d'entrer des données valides pour Chambre");
  
  
      }

    }




}
