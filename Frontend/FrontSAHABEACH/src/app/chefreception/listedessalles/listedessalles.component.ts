import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { AddEditChambreComponent } from '../gestion-chambre/add-edit-chambre/add-edit-chambre.component';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import * as alertifyjs from 'alertifyjs';
import { AddEditSallComponent } from '../add-edit-sall/add-edit-sall.component';
@Component({
  selector: 'app-listedessalles',
  templateUrl: './listedessalles.component.html',
  styleUrls: ['./listedessalles.component.css']
})
export class ListedessallesComponent {
  Listsalles:any=[];
  editmode:boolean=false;
  constructor(private service:SharedServiceService,private dialog:MatDialog){


  }
  ngOnInit(): void {
    this.getAllSalles();
 
this.service.RequiredRefresh.subscribe(res=>{
  this.getAllSalles();
})

}
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditSallComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '500px',
         data:{
           idsalle:id,
           editmo:this.editmode,
   
         }
         
         
         
         
         
       })
   
     } 
     update(id:any){
      this.editmode=true;
     this.OpenDialog('1000ms','600ms',id)
     this.getAllSalles();
     
  
    }
     getAllSalles(){
      this.service.getAllsalles().subscribe(data=>{
        this.Listsalles=data;
      })
    }
  addclick(){
    this.editmode=false;
    this.OpenDialog('1000ms','600ms','')
    this.getAllSalles();

  }
  supprimer(id:any){
    alertifyjs.confirm("Supprimer La Salle","Voulez vous supprimer la Salle?",()=>{ this.service.supprimerSalles(id).subscribe(del=>{
      this.getAllSalles();
      alertifyjs.success('La Salle est supprimée avec succès');
    })
  
    },function(){
  
    })
   
  }

  

}
