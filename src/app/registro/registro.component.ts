import { Component, OnInit } from '@angular/core';
import {Duenio,ServiceService} from '../servicios/service.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl,FormArray, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  duenio: Duenio ={
    duenio_id: "",
    nombre: "",
    edad: "",
    direccion: "",
    genero: "",
    email: ""
  }

  constructor(private ss:ServiceService, private ruta:Router) { }
  

  ngOnInit(): void {
  }

  onSubmit(form:NgForm):void{
    console.log('Form values',form)
  }

  agregar(){
    const x = this.duenio as Partial<Duenio>;
    delete x.duenio_id;

    this.ss.addDuenio(x).subscribe({
      next: (res)=>this.ruta.navigate(['/usuario']),
      error: (err)=>console.log(err),
      complete: ()=>console.log("Exito al agregar")
    });
    
  }

}
