import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from '../services/shared-service.service';
import * as alertifyjs from 'alertifyjs';
import { AuthServiceService } from '../auth-service.service';

import { ActivatedRoute, Params } from '@angular/router';
import { LoginResponse } from '../Models/LoginResponse';
import { Sign } from 'crypto';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  token!: string
  constructor(private authService: AuthServiceService, private service: SharedServiceService, private formbuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.route.snapshot.data['userId'] = '123';



  }

  dataResult: any;
  public SignForm!: FormGroup;
  public roleD = 'Directeur';
  public roleR = 'Réceptionniste';
  public roleCh = "Chef de réception"
  public roleM = "Maître d'hôtel"

  ngOnInit(): void {
    this.SignForm = this.formbuilder.group({
      login: [''],

      password: [''],



    })
  }
  SignIn() {
    this.service.getAllUsers().subscribe(res => {
      const userSahaBeachD = res.find((a: any) => {
        return a.login === this.SignForm.value.login && a.password === this.SignForm.value.password && a.roles == this.roleD
      });
      const userSahaBeachR = res.find((a: any) => {
        return a.login === this.SignForm.value.login && a.password === this.SignForm.value.password && a.roles == this.roleR
        localStorage.setItem("NomUser", a.NomUser)
        console.log(localStorage)
      });
      const userSahaBeachch = res.find((a: any) => {
        return a.login === this.SignForm.value.login && a.password === this.SignForm.value.password && a.roles == this.roleCh
        localStorage.setItem("NomUser", a.NomUser)
        console.log(localStorage)
      });
      const userSahaBeachm = res.find((a: any) => {
        return a.login === this.SignForm.value.login && a.password === this.SignForm.value.password && a.roles == this.roleM
        localStorage.setItem("NomUser", a.NomUser)
        console.log(localStorage)
      });

      if (userSahaBeachD) {

        alertifyjs.success("SignIn successful");

        this.SignForm.reset();
        this.router.navigate(['/userdirector']);
      }


      else if (userSahaBeachR) {

        alertifyjs.success("SignIn successful");

        this.SignForm.reset();
        this.router.navigate(['/userRecep']);
      }
      else if (userSahaBeachch) {

        alertifyjs.success("SignIn successful");

        this.SignForm.reset();
        this.router.navigate(['/userchefreception']);
      }
      else if (userSahaBeachm) {

        alertifyjs.success("SignIn successful");

        this.SignForm.reset();
        this.router.navigate(['/usermaitrehotel']);
      }
      else {
        alertifyjs.error("User Not found!!!")

      }




    }, err => {
      alert('Something want wrong');
    })
  }
  onSubmit() {


    this.authService.login(this.SignForm.value).subscribe((response: any) => {
      this.dataResult = response
      // console.log(response)

      let value = this.authService.saveToken(this.dataResult.token)
       

      let role: any = this.authService.getrole()
      if (role == this.roleD) {
        this.SignForm.reset(); alertifyjs.success("SignIn successful");

        this.SignForm.reset();
        this.router.navigate(['/userdirector']);

      } 
      else if (role == this.roleR) {
        alertifyjs.success("SignIn successful");

        this.SignForm.reset();
        this.router.navigate(['/userRecep']);

      }
      else if (role == this.roleM) {
        alertifyjs.success("SignIn successful");

        this.SignForm.reset();
        this.router.navigate(['/usermaitrehotel']);

      }
      else if (role == this.roleCh) {
        alertifyjs.success("SignIn successful");

        this.SignForm.reset();
        this.router.navigate(['/userchefreception']);

      }


      /*  localStorage.setItem('jwt', response.token);
       this.authService.setUser(response.user);
       if (response.user.roles == "Directeur") {
         alertifyjs.success("SignIn successful");
     
         this.SignForm.reset(); alertifyjs.success("SignIn successful");
     
         this.SignForm.reset();
         this.router.navigate(['/userdirector']);
       } else if (response.user.roles == this.roleR) {
         alertifyjs.success("SignIn successful");
     
         this.SignForm.reset();
         this.router.navigate(['/userRecep']);
       }
       else if (response.user.roles == this.roleCh) {
         alertifyjs.success("SignIn successful");
     
         this.SignForm.reset();
         this.router.navigate(['/userchefreception']);
       }
       else if (response.user.roles == this.roleM) {
         alertifyjs.success("SignIn successful");
     
         this.SignForm.reset();
         this.router.navigate(['/usermaitrehotel']);
       } */
    },
      (error) => {
        // Si l'authentification a échoué, affichez un message d'erreur
        alertifyjs.error("Something want wrong");

      }
    );
  }
}



