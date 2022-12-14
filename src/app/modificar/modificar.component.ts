import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Duenio, ServiceService } from '../servicios/service.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {


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

  onSubmit(form: NgForm): void {
    console.log('Form values', form)
  }

  modificar() {
    this.ss.updateDuenio(this.id,this.duenio).subscribe({
      next: (res)=>this.ruta.navigate(['/usuario']),
      error: (err)=>console.log(err),
      complete: ()=>console.log("Exito al agregar")
    });
  }

}
