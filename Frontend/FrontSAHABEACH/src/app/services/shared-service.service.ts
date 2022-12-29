import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ReservChambre } from '../Models/ReservChambre';
import { Client } from '../Models/Client';
import { Salles } from '../Models/Salles';
import { Tables } from '../Models/Tables';
import { Chambre } from '../Models/Chambre';
import { ReserTable } from '../Models/ReserTable';
import { ReservSalle } from '../Models/ReservSalle';
import { Facture } from '../Models/Facture';
import { Subject,tap } from 'rxjs';

import { Question } from '../Models/Question';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  readonly ApiUrl = " https://localhost:7238/api";
  reserdata!: ReservChambre;
  resertdata!: ReserTable;
  clientdata!:Client;
  reserSallesData!:ReservSalle;
  TablesData!:Tables;
  salle!:Salles;
  table!:Tables;
  chambre!:Chambre;
  facture!:Facture;
  constructor(private http: HttpClient) {

  }
  private  refreshrequired = new Subject<void>();
  get RequiredRefresh(){
    return this.refreshrequired
  }
  saveSalles(data:any){

    return this.http.post(this.ApiUrl+'/Salles',data).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }

  getSallesId(id: any): Observable<Salles> {
    return this.http.get<Salles>(this.ApiUrl + '/Salles/' + id);
  }
  getTableId(id: any): Observable<Tables> {
    return this.http.get<Tables>(this.ApiUrl + '/Tablesses/' + id);
  }
  getAllsalles(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/Salles");
  }
  getAllfactures(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/Factures");
  }
  getAllquestions(): Observable<Question> {
    return this.http.get<Question>(this.ApiUrl + "/Questionresponses");
  }
  supprimerSalles(data: any) {
    return this.http.delete(this.ApiUrl + '/Salles/' + data);

  }
  UpdateSalles(id: any, reserdata: any): Observable<Salles> {
    return this.http.put<Salles>(this.ApiUrl + '/Salles/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }

  saveTables(data:any){

    return this.http.post(this.ApiUrl+'/Tablesses',data).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  saveuse(data:any){

    return this.http.post(this.ApiUrl+'/Login',data).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  getAllTables(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/Tablesses");
  }
  supprimerTables(data: any)  {
    return this.http.delete(this.ApiUrl + '/Tablesses/' + data);

  }
  UpdateTables(id: any, reserdata: any): Observable<Tables> {
    return this.http.put<Tables>(this.ApiUrl + '/Tablesses/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }


  savereservationch(data: any) {
    return this.http.post(this.ApiUrl + '/ReservationChambres', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }
  getAllchambres(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/Chambres");
  }
  getAllReservationsch(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/ReservationChambres");
  }
  getAllReservationsSalles(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/ReservationSalles");
  }

  
  getFactureById(id: any): Observable<Facture> {
    return this.http.get<Facture>(this.ApiUrl + '/Factures/' + id);
  } 
  getChambreById(id: any): Observable<Chambre> {
    return this.http.get<Chambre>(this.ApiUrl + '/Chambres/' + id);
  } 
  getReserTableById(id: any): Observable<ReserTable> {
    return this.http.get<ReserTable>(this.ApiUrl + '/ReservationTabs/' + id);
  } 
  getReserSallesById(id: any): Observable<ReservSalle> {
    return this.http.get<ReservSalle>(this.ApiUrl + '/ReservationSalles/' + id);
  } 
      getReserChById(id: any): Observable<ReservChambre> {
        return this.http.get<ReservChambre>(this.ApiUrl + '/ReservationChambres/' + id);
      }
  saveClient(data: any) {
    return this.http.post(this.ApiUrl + '/clients', data).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));
  }
  saveChambre(data: any) {
    return this.http.post(this.ApiUrl + '/Chambres', data).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));
  }
  getAllClients(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/clients");
  }
  getAllResernum(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/ReservationChambres/Getnumchammbre");
  }
  getAllChambreDispo(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/Chambres/GetDispoCh");
  }
  getAllSalleDispo(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/Salles/GetDispoSalles");
  }
  getAllTableDispo(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/Tablesses/GetDispoTables");
  }
  getAllResersallesdet(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/ReservationSalles/GetSalleDet");
  }
  getAllfacturesdet(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/Factures/Get FactureClient");
  }
  getAllReserTablesesdet(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/ReservationTabs/Get TableDet");
  }
  supprimerClient(data: any) {
    return this.http.delete(this.ApiUrl + '/clients/' + data);

  }
  supprimerfactures(data: any) {
    return this.http.delete(this.ApiUrl + '/Factures/' + data);

  }
  supprimerChambre(data: any) {
    return this.http.delete(this.ApiUrl + '/Chambres/' + data);

  }
  supprimerReserch(data: any) {
    return this.http.delete(this.ApiUrl + '/ReservationChambres/' + data);

  }
  supprimerReserSalle(data: any) {
    return this.http.delete(this.ApiUrl + '/ReservationSalles/' + data);

  }
  UpdateReserSalle(id: any, reserdata: any): Observable<ReservSalle> {
    return this.http.put<ReservSalle>(this.ApiUrl + '/ReservationSalles/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  UpdateChambre(id: any, reserdata: any): Observable<Chambre> {
    return this.http.put<Chambre>(this.ApiUrl + '/Chambres/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  UpdateReserch(id: any, reserdata: any): Observable<ReservChambre> {
    return this.http.put<ReservChambre>(this.ApiUrl + '/ReservationChambres/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  UpdateClient(id: any, reserdata: any): Observable<Client> {
    return this.http.put<Client>(this.ApiUrl + '/clients/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  getAllReservTable(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/ReservationTabs");
  }
  supprimerResert(data: any) {
    return this.http.delete(this.ApiUrl + '/ReservationTabs/' + data);

  }
  savereservationt(data: any) {
    return this.http.post(this.ApiUrl + '/ReservationTabs', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }
  savereFacture(data: any) {
    return this.http.post(this.ApiUrl + '/Factures', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }
  savereservationsalles(data: any) {
    return this.http.post(this.ApiUrl + '/ReservationSalles', data).pipe(tap(()=>{

     this.RequiredRefresh.next();

    }));
  }
  UpdateResert(id: any, reserdata: any): Observable<ReserTable> {
    return this.http.put<ReserTable>(this.ApiUrl + '/ReservationTabs/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }
  UpdateFacture(id: any, reserdata: any): Observable<Facture> {
    return this.http.put<Facture>(this.ApiUrl + '/Factures/' + id, reserdata).pipe(tap(()=>{

      this.RequiredRefresh.next();
 
     }));

  }


  getclientById(id: any): Observable<Client> {
    return this.http.get<Client>(this.ApiUrl + '/clients/' + id);
  }
 
  getUserById(id: any) {
    return this.http.get(this.ApiUrl + '/Utilisateurs/' + id);
  }
  getAllUsers(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + '/Utilisateurs');
  }
  SaveUsers(data: any) {
    return this.http.post(this.ApiUrl + '/Utilisateurs', data);
  }
}
