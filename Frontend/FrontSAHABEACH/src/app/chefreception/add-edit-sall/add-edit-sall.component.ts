import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-edit-sall',
  templateUrl: './add-edit-sall.component.html',
  styleUrls: ['./add-edit-sall.component.css']
})
export class AddEditSallComponent {
  editdata: any;
  respdata:any;
  editmode:boolean=false;
  constructor(private service: SharedServiceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditSallComponent>) { }
  ngOnInit(): void {
    this.editmode=this.d.editmo;
    console.log(this.editmode);

    if (this.d.idsalle != null && this.d.idsalle != '') {


    this.service.getSallesId(this.d.idsalle).subscribe(respponse=>{
this.editdata=respponse;
this.Reactiveform.setValue({
  idsalle:this.editdata.idsalle,

 
  etat: this.editdata.etat,
 
  type: this.editdata.type,
  prix: this.editdata.prix,
  
});


    })

    } 

  }
  Reactiveform = new FormGroup({
    idsalle:new FormControl({value:0,disabled:true}),
    
    etat: new FormControl("", Validators.required),
     
    type: new FormControl("", Validators.required),
    prix: new FormControl("", Validators.required),
  
    }) 
    SaveSallesData(){
      if (this.Reactiveform.valid) {
        const editid= this.Reactiveform.getRawValue().idsalle;
        if (editid!=null){
          this.service.UpdateSalles(editid,this.Reactiveform.getRawValue()).subscribe(response=>{
          
            this.dialogref.close()
  
            alertifyjs.success('Bravo! Les coordonées de la Salle est modifiée avec succès');
         
  
          })
     
        
        }
        this.service.saveSalles(this.Reactiveform.getRawValue()).subscribe(result => {
          this.respdata = result;
          if (this.respdata) {
      
            this.dialogref.close()
            alertifyjs.success('Bravo! La Salle est enregistrée avec succès');
      
          }
  
        });
     
  
  
      } else {
        alertifyjs.error("Merci d'entrer des données valides pour Salle");
  
  
      }

    }

}
