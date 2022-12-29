import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { Inject } from '@angular/core';
import { AddEditTablesComponent } from 'src/app/usermaitrehotel/add-edit-tables/add-edit-tables.component';

@Component({
  selector: 'app-add-edit-tab',
  templateUrl: './add-edit-tab.component.html',
  styleUrls: ['./add-edit-tab.component.css']
})
export class AddEditTabComponent {
  editdata: any;
  respdata:any;
  editmode:boolean=false;
  constructor(private service: SharedServiceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditTabComponent>) { }
  ngOnInit(): void {
    this.editmode=this.d.editmo;
    console.log(this.editmode);

    if (this.d.idtable != null && this.d.idtable != '') {


    this.service.getTableId(this.d.idtable).subscribe(respponse=>{
this.editdata=respponse;
this.Reactiveform.setValue({
  idtable:this.editdata.idtable,

 
  numTable: this.editdata.numTable,
 
  type: this.editdata.type,
  etat: this.editdata.etat,
  prix: this.editdata.prix,
  
});


    })

    } 

  }
  Reactiveform = new FormGroup({
    idtable:new FormControl({value:0,disabled:true}),
    
    numTable: new FormControl("", Validators.required),
     
    type: new FormControl("", Validators.required),
    etat: new FormControl("", Validators.required),
    prix: new FormControl("", Validators.required),
  
    }) 
    SaveTablesData(){
      if (this.Reactiveform.valid) {
        const editid= this.Reactiveform.getRawValue().idtable;
        if (editid!=null){
          this.service.UpdateTables(editid,this.Reactiveform.getRawValue()).subscribe(response=>{
          
            this.dialogref.close()
  
            alertifyjs.success('Bravo! Les coordonées de la Table est modifiée avec succès');
         
  
          })
     
        
        }
        this.service.saveTables(this.Reactiveform.getRawValue()).subscribe(result => {
          this.respdata = result;
          if (this.respdata) {
      
            this.dialogref.close()
            alertifyjs.success('Bravo! La Table est enregistrée avec succès');
      
          }
  
        });
     
  
  
      } else {
        alertifyjs.error("Merci d'entrer des données valides pour Salle");
  
  
      }

    }

}
