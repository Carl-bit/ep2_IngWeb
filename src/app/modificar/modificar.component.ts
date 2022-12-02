import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, Validators, NgForm } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';

import {Duenio,ServiceService} from '../servicios/service.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {


  duenio: Partial<Duenio> ={
    nombre: "",
    edad: "",
    direccion: "",
    genero: "",
    email: ""
  }

  constructor(private ss:ServiceService, private ruta:Router, private ar:ActivatedRoute) { }
  

  ngOnInit(): void {
    const id_entrada = <string>this.ar.snapshot.params.id;
    console.log('id: '+id_entrada);

      if(id_entrada){
        this.ss.getDuenio(id_entrada).subscribe({
          next: (req)=>duenio=res,
          err: (err)=>console.log(err),
          complete: ()=>console.log('completo el traspaso')
        })
      }
  }

  onSubmit(form:NgForm):void{
    console.log('Form values',form)
  }
 
  modificar(){

  }

}
