import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = '/user';

  constructor(private http: HttpClient) { }


//------------------------------------------------------------------
  //get equipos
  getUsuario()
  {
    return this.http.get(this.url);
  }

 //GET duenio
  getDuenio(id:string){
    return this.http.get(this.url+'/'+id);
  }

  //post duenio

  updateDuenio(id:string,duenio:any){
    return this.http.put(this.url+'/'+id,duenio);
  }

  //agregar duenio
  addDuenio(duenio:any){
    return this.http.post(this.url,duenio);
  }

  //eliminar duenio
  deleteDuenio(id:string){
    return this.http.delete(this.url+'/'+id);
  }
//------------------------------------------------------------------

}


export interface Duenio{
  id_duenio:string;
  nombre:string;
  edad:number;
  direccion?:string;
  genero:string;
  email:string;
}