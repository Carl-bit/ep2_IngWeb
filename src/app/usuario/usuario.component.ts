import { Component, OnInit } from '@angular/core';
import { ServiceService,Duenio} from '../servicios/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  ListarDuenios!: Duenio[];
  constructor(private ss:ServiceService, private ruta:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo(){
    this.ss.getUsuario().subscribe({
      next: (res)=>{console.log(res); this.ListarDuenios=<any>res},
      error: (err)=>console.log(err),
      complete: ()=>console.log('completed')
    }
    );
  }

  modificar(id:string){
    this.ruta.navigate(['/modificar/'+id]);
  }

  perfil(id:string){
    this.ruta.navigate(['/perfil/'+id]);
  }

  eliminar(id:string){
    this.ss.deleteDuenio(id).subscribe({
      next: (res)=>{console.log('Equipo Eliminado');},
      error: (err)=>console.log(err),
      complete: ()=>this.listarEquipo()
    })
  }

}
