import { Component } from '@angular/core';
import { AddEditClientComponent } from '../gestionclient/add-edit-client/add-edit-client.component';
import {MatDialog} from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-listeclients',
  templateUrl: './listeclients.component.html',
  styleUrls: ['./listeclients.component.css']
})
export class ListeclientsComponent {
  ListClients:any=[];
  editmode:boolean=false;
  constructor(private service:SharedServiceService,private dialog:MatDialog){


  }
  getrow(row:any){

  }
  ngOnInit(): void {
    this.getAllClients();
  
  this.service.RequiredRefresh.subscribe(res=>{
  this.getAllClients();
})
  
  }
  getAllClients(){
    this.service.getAllClients().subscribe(data=>{
      this.ListClients=data;
    })
  }
  supprimer(id:any){
    alertifyjs.confirm("Supprimer Client","Voulez vous supprimer le client?",()=>{ this.service.supprimerClient(id).subscribe(del=>{
      this.getAllClients();
      alertifyjs.success('Le Client est supprimé avec succès');
    })

    },function(){

    })
   
  }
  add(){
    this.editmode=false;
    this.OpenDialog('1000ms','600ms','')

    
  }
  
  
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditClientComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width: '500px',
      data:{
        clientid:id,
        editmo:this.editmode,

      }
      
    })

  }
  update(id:any){
    this.editmode=true;
   this.OpenDialog('1000ms','600ms',id)

  }
}
