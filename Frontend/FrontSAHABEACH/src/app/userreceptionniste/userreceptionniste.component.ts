import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedServiceService } from '../services/shared-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-userreceptionniste',
  templateUrl: './userreceptionniste.component.html',
  styleUrls: ['./userreceptionniste.component.css']
})
export class UserreceptionnisteComponent {
  Name:any;

  UsersList:any=[];
  id2:any;
  UserId:any;

  constructor(private authService: AuthServiceService,private service: SharedServiceService,private route:Router){}
 

nom= this.authService.getnom();
   prenom=this.authService.getprenom();
   role=this.authService.getrole();
   logout() {
    // Remove the authentication token from storage
    localStorage.removeItem('token');

    // Redirect the user to the login page
    this.route.navigate(['/authen']);

    // Clear any state in your application that is specific to the authenticated user
    // For example:
    // this.currentUserId = null;
    // this.currentUserName = null;
  }

}
