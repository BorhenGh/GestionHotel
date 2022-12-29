import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-add-edit-tables',
  templateUrl: './add-edit-tables.component.html',
  styleUrls: ['./add-edit-tables.component.css']
})
export class AddEditTablesComponent {
  respdata: any;
  listclients: any = [];
  listtables: any = [];
  editdata: any;
  editmode:boolean=false;
  constructor(private service: SharedServiceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditTablesComponent>) { }
  ngOnInit(): void {
    this.editmode=this.d.editmo;
    console.log(this.editmode);
this.allclients();
this.alltables();
    if (this.d.idtable != null && this.d.idtable != '') {


    this.service.getReserTableById(this.d.idtable).subscribe(respponse=>{
this.editdata=respponse;
this.Reactiveform.setValue({
  idresertab:this.editdata.idresertab,
  date_reser: this.editdata.date_reser,
 
  nombrePersonnes: this.editdata.nombrePersonnes,
 
  idclient: this.editdata.idclient,
  idtable: this.editdata.idtable,
  
});


    })

    } 

  }

Reactiveform = new FormGroup({
  idresertab:new FormControl({value:0,disabled:true}),
    date_reser: new FormControl(new Date()),
   
    nombrePersonnes: new FormControl("", Validators.required),
   
    idclient: new FormControl("", Validators.required),
    idtable: new FormControl("", Validators.required),

  })
  allclients() {
    this.service.getAllClients().subscribe(data => {
      this.listclients = data;
    })
  }
  alltables() {
    this.service.getAllTableDispo().subscribe(data => {
      this.listtables = data;
    })
  }
  getReservFormData() {
    if (this.Reactiveform.valid) {
      const editid= this.Reactiveform.getRawValue().idresertab;
      if (editid!=null){
        this.service.UpdateResert(editid,this.Reactiveform.getRawValue()).subscribe(response=>{
        
          this.dialogref.close()

          alertifyjs.success('Bravo! La réservation  est modifiée avec succès');
       

        })
   
      
      }
      this.service.savereservationt(this.Reactiveform.getRawValue()).subscribe(result => {
        this.respdata = result;
        if (this.respdata) {
    
          this.dialogref.close()
          alertifyjs.success('Bravo! La réservation  est enregistrée avec succès');
    
        }

      });
   


    } else {
      alertifyjs.error("Merci d'entrer des données valides pour réservation");


    }

  }

}
