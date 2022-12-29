import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-userdirecteur',
  templateUrl: './userdirecteur.component.html',
  styleUrls: ['./userdirecteur.component.css']
})
export class UserdirecteurComponent {
  constructor(private authService: AuthServiceService,private route:Router){

  }
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
   

