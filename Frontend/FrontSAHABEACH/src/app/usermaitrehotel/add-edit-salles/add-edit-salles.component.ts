import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-edit-salles',
  templateUrl: './add-edit-salles.component.html',
  styleUrls: ['./add-edit-salles.component.css']
})
export class AddEditSallesComponent {
  respdata: any;
  listclients: any = [];
  listsalles: any = [];
  editdata: any;
  editmode:boolean=false;
  constructor(private service: SharedServiceService, @Inject(MAT_DIALOG_DATA) public d: any, public dialogref: MatDialogRef<AddEditSallesComponent>) { }
  
  ngOnInit(): void {
    this.editmode=this.d.editmo;
    console.log(this.editmode);
this.allclients();
this.allsalles();
    if (this.d.idsalle != null && this.d.idsalle != '') {


    this.service.getReserSallesById(this.d.idsalle).subscribe(respponse=>{
this.editdata=respponse;
this.Reactiveform.setValue({
  idresersalle:this.editdata.idresersalle,
  date_reser: this.editdata.date_reser,
 
  nombrePersonnes: this.editdata.nombrePersonnes,
 
  idclient: this.editdata.idclient,
  idsalle: this.editdata.idsalle,
  
});


    })

    } 

  }
  Reactiveform = new FormGroup({
    idresersalle:new FormControl({value:0,disabled:true}),
      date_reser: new FormControl(new Date()),
     
      nombrePersonnes: new FormControl("", Validators.required),
     
      idclient: new FormControl("", Validators.required),
      idsalle: new FormControl("", Validators.required),
  
    })
    allclients() {
      this.service.getAllClients().subscribe(data => {
        this.listclients = data;
      })
    }
    allsalles() {
      this.service.getAllSalleDispo().subscribe(data => {
        this.listsalles = data;
      })
    }
    getReservFormData() {
      if (this.Reactiveform.valid) {
        const editid= this.Reactiveform.getRawValue().idresersalle;
        if (editid!=null){
          this.service.UpdateReserSalle(editid,this.Reactiveform.getRawValue()).subscribe(response=>{
          
            this.dialogref.close()
  
            alertifyjs.success('Bravo! La réservation  est modifiée avec succès');
         
  
          })
     
        
        }
        this.service.savereservationsalles(this.Reactiveform.getRawValue()).subscribe(result => {
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
