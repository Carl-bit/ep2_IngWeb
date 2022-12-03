import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Duenio, ServiceService } from '../servicios/service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  duenio: Duenio = {
    duenio_id: "",
    nombre: "",
    edad: "",
    direccion: "",
    genero: "",
    email: ""
  }

  
  id!: string;
  constructor(private ss: ServiceService, private ruta: Router, private ar: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = <string>this.ar.snapshot.params.id;
    console.log('id: ' + this.id);

    if (this.id) {
      this.ss.getDuenio(this.id).subscribe(duenio=>{
        console.log(duenio);
        this.duenio=duenio;
      });
    }

  }

  


}
