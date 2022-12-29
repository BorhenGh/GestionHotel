import { Component } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { AddEditChambreComponent } from '../gestion-chambre/add-edit-chambre/add-edit-chambre.component';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import * as alertifyjs from 'alertifyjs';
import { AddEditTablesComponent } from 'src/app/usermaitrehotel/add-edit-tables/add-edit-tables.component';
import { AddEditTabComponent } from '../add-edit-tab/add-edit-tab.component';
@Component({
  selector: 'app-listedestables',
  templateUrl: './listedestables.component.html',
  styleUrls: ['./listedestables.component.css']
})
export class ListedestablesComponent {
  Listtables:any=[];
  editmode:boolean=false;
  constructor(private service:SharedServiceService,private dialog:MatDialog){

  }
  ngOnInit(): void {
    this.getAllTables();
 
this.service.RequiredRefresh.subscribe(res=>{
  this.getAllTables();
})

}
OpenDialog(enteranimation:any,exitanimation:any,id:any){
  this.dialog.open(AddEditTabComponent,{
       enterAnimationDuration:enteranimation,
       exitAnimationDuration:exitanimation,
       width: '500px',
       data:{
         idtable:id,
         editmo:this.editmode,
 
       }
       
       
       
       
       
     })
 
   } 
   update(id:any){
    this.editmode=true;
   this.OpenDialog('1000ms','600ms',id)
   this.getAllTables();
   

  }
  addclick(){
    this.editmode=false;
    this.OpenDialog('1000ms','600ms','')
    this.getAllTables();

  }
  supprimer(id:any){
    alertifyjs.confirm("Supprimer La Table","Voulez vous supprimer la Table?",()=>{ this.service.supprimerTables(id).subscribe(del=>{
      this.getAllTables();
      alertifyjs.success('La Table est supprimée avec succès');
    })
  
    },function(){
  
    })
   
  }
  getAllTables(){
    this.service.getAllTables().subscribe(data=>{
      this.Listtables=data;
    })
  }




}
