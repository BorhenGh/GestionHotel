import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { AddEditChambreComponent } from '../gestion-chambre/add-edit-chambre/add-edit-chambre.component';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-listedeschambres',
  templateUrl: './listedeschambres.component.html',
  styleUrls: ['./listedeschambres.component.css']
})
export class ListedeschambresComponent {
  Listchambres:any=[];
  editmode:boolean=false;
  constructor(private service:SharedServiceService,private dialog:MatDialog){


  }
  ngOnInit(): void {
    this.getAllChambres();
 
this.service.RequiredRefresh.subscribe(res=>{
  this.getAllChambres();
})

}
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditChambreComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '500px',
         data:{
           idchambre:id,
           editmo:this.editmode,
   
         }
         
         
         
         
         
       })
   
     } 
     update(id:any){
      this.editmode=true;
     this.OpenDialog('1000ms','600ms',id)
     this.getAllChambres();
     
  
    }

     getAllChambres(){
      this.service.getAllchambres().subscribe(data=>{
        this.Listchambres=data;
      })
    }
  
   addclick(){
      this.editmode=false;
    this.OpenDialog('1000ms','600ms','')
    this.getAllChambres();

}
supprimer(id:any){
  alertifyjs.confirm("Supprimer La Chambre","Voulez vous supprimer la Chambre?",()=>{ this.service.supprimerChambre(id).subscribe(del=>{
    this.getAllChambres();
    alertifyjs.success('La Chambre est supprimée avec succès');
  })

  },function(){

  })
 
}


}
