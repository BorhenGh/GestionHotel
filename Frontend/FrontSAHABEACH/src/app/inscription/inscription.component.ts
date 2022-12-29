import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { SharedServiceService } from '../services/shared-service.service';
import * as alertifyjs from 'alertifyjs';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  //

  constructor(private service: SharedServiceService, private router: Router) { }
  public SignForm!: FormGroup;
  respdate: any;
  ngOnInit(): void {

  }
  Reactiveform = new FormGroup({
    
    login: new FormControl("", Validators.required),

    nomUser: new FormControl("", Validators.required),
    prenomUser: new FormControl("", Validators.required),
    password: new FormControl('', [
      Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9A-Za-z!@#$%^&*]{8,}$/)
     
    ]),
    roles: new FormControl("", Validators.required),

  })
  SignUp() {
    if (this.Reactiveform.valid) {
      this.service.SaveUsers(this.Reactiveform.getRawValue()).subscribe(res => {
        this.respdate = res;
        if (this.respdate) {
          alertifyjs.success("Signup successful")

          this.router.navigate(['/authen']);
        }
      });
    } else {
      alertifyjs.error("Merci d'entrer des données valides pour Inscription");


    }


  }
}
