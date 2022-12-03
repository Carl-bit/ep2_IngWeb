import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlDuenio = '/user';
  urlLogin = '/login';
  urlGato = '/gato';

  constructor(private http: HttpClient) { }


//------------------------------------------------------------------
  //get equipos
  getUsuario()
  {
    return this.http.get(this.urlDuenio);
  }

 //GET duenio
  getDuenio(id:string):Observable<Duenio>{
    return this.http.get<Duenio>(this.urlDuenio+'/'+id);
  }

  //post duenio

  updateDuenio(id:string,duenio:any){
    return this.http.put(this.urlDuenio+'/'+id,duenio);
  }

  //agregar duenio
  addDuenio(duenio:any){
    return this.http.post(this.urlDuenio,duenio);
  }

  //eliminar duenio
  deleteDuenio(id:string){
    return this.http.delete(this.urlDuenio+'/'+id);
  }
//------------------------------------------------------------------

//-----------------------------------------------------------------

getInicio(id:string):Observable<User>{
  return this.http.get<User>(this.urlLogin+'/'+id);
}

  mostrarUser(){
    return this.http.get(this.urlLogin);
  }

//-----------------------------------------------------------------
mostrarGatos(){
  return this.http.get(this.urlGato);
}

mostrarGatosId(id:string){
  return this.http.get(this.urlGato+'/'+id);
}

crearGato(gatito:any){
  return this.http.post(this.urlGato,gatito);
}
  
}

export interface Gato{
  gato_id:string;
  nombre:string;
  peso:string;
  pelaje:string;
  genero:string;
  diag_id:string;
}

export interface User{
  user_id:string;
  email_user:string;
  pass:string;
}


export interface Duenio{
  duenio_id:string;
  nombre:string;
  edad:string;
  direccion:string;
  genero:string;
  email:string;
}