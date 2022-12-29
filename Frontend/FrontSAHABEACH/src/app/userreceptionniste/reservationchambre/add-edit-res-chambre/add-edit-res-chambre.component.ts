import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as alertifyjs from 'alertifyjs';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-edit-res-chambre',
  templateUrl: './add-edit-res-chambre.component.html',
  styleUrls: ['./add-edit-res-chambre.component.css']
})
export class AddEditResChambreComponent {
  listclients: any = [];
  listchambres: any = [];
  respdata: any;
  editdata: any;
  ListReservations: any;
  editmode:boolean=false;
  constructor(private service: SharedServiceService, public dialogref: MatDialogRef<AddEditResChambreComponent> ,@Inject(MAT_DIALOG_DATA) public d: any) { }
  ngOnInit(): void {
    this.editmode=this.d.editmo;
    console.log(this.editmode);

    if (this.d.idreserCh != null && this.d.idreserCh != '') {


    this.service.getReserChById(this.d.idreserCh).subscribe(respponse=>{
this.editdata=respponse;
this.Reactiveform.setValue({
  idreserCh:this.editdata.idreserCh,
  date_reser: this.editdata.date_reser,
  date_arrivee: this.editdata.date_arrivee,
  date_depart: this.editdata.date_depart,
  nombreAdultes: this.editdata.nombreAdultes,
  nombreEnfants: this.editdata.nombreEnfants,

  idclient: this.editdata.idclient,
  idchambre: this.editdata.idchambre,
  
});


    })

    } this.allclients();
    this.allchambres();

  }
  Reactiveform = new FormGroup({
    idreserCh:new FormControl({value:0,disabled:true}),
    date_reser: new FormControl(new Date()),
    date_arrivee: new FormControl(new Date()),
    date_depart: new FormControl(new Date()),
    nombreAdultes: new FormControl("", Validators.required),
    nombreEnfants: new FormControl("", Validators.required),
    
    idclient: new FormControl("", Validators.required),
    idchambre: new FormControl("", Validators.required),

  })
  allclients() {
    this.service.getAllClients().subscribe(data => {
      this.listclients = data;
    })
  }
  allchambres() {
    this.service.getAllChambreDispo().subscribe(data => {
      this.listchambres = data;
    })
  }

  getReservFormData() {
    if (this.Reactiveform.valid) {
      const editid= this.Reactiveform.getRawValue().idreserCh;
      if (editid!=null){
        this.service.UpdateReserch(editid,this.Reactiveform.getRawValue()).subscribe(response=>{
        
          this.dialogref.close()

          alertifyjs.success('Bravo! La réservation  est modifiée avec succès');
       

        })
   
      
      }
      this.service.savereservationch(this.Reactiveform.getRawValue()).subscribe(result => {
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



