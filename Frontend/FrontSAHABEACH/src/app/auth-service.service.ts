import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './Models/Utilisateur';
import {JwtHelperService} from '@auth0/angular-jwt' ;

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  readonly ApiUrl = " https://localhost:7238/api";
  user!: Utilisateur;
  helper = new JwtHelperService()
  constructor(private http: HttpClient) {}
  /* login(credentials: { login: string, password: string }): Observable<{ token: string, user: Utilisateur }> {
    return this.http.post<{ token: string, user: Utilisateur }>(this.ApiUrl+'/Login', credentials);
    
  } */
  login(data :any ){
    return this.http.post(this.ApiUrl+'/Login',data)
    //return this.http.post('http://localhost:9000/login',data)
  }
  setUser(user: Utilisateur) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
  saveToken(data : any) : any{
    let token :any = localStorage.setItem('token',data) ;
    if(token!=null){
      return true
    }else{
      return false
    }
}

  getrole(){
    let token :any = localStorage.getItem('token') ;
    
    if(token!=null){
      let decode = this.helper.decodeToken(token) ;
      console.log(decode)
      console.log(decode.Roles)
      return decode.Roles 
    }else{
      return "false" 
    }
  }
  getnom(){
    let token :any = localStorage.getItem('token') ;
    
    if(token!=null){
      let decode = this.helper.decodeToken(token) ;
      console.log(decode)
      console.log(decode.NomUser)
      return decode.NomUser
    }else{
      return "false" 
    }

  }
  getprenom(){
    let token :any = localStorage.getItem('token') ;
    
    if(token!=null){
      let decode = this.helper.decodeToken(token) ;
      console.log(decode)
      console.log(decode.PrenomUser
        )
      return decode.Prenom

    }else{
      return "false" 
    }

  }
  
}
