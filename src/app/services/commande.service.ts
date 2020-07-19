import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyInterface } from '../models/my-interface';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  urlApi='http://localhost:42400/commandes';
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<MyInterface>(this.urlApi);
  }
  delete(id){
    return this.http.delete(`${this.urlApi}/${id}`);
  }
  post(commandes){
    return this.http.post<MyInterface>(this.urlApi,commandes)
  }
updateCommande(commandes){
  return this.http.put(`${this.urlApi}/${commandes.id}`,commandes);
}

}
