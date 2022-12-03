import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, Validators, NgForm } from '@angular/forms';
import { ServiceService, Gato} from '../servicios/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  gato:Gato={
    gato_id:"",
    nombre:"",
    peso:"",
    pelaje:"",
    genero:"",
    diag_id:"",
  };
  constructor(private ss:ServiceService, private ruta:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm):void{
    console.log('Form values',form)
  }

  agregar(){
    const x = this.gato as Partial<Gato>;
    delete x.gato_id;

    this.ss.crearGato(x).subscribe({
      next: (res)=>{console.log("Subido con exito");console.log(x)},
      error: (err)=>console.log(err),
      complete: ()=>{this.gato.nombre = "";this.gato.genero="";this.gato.pelaje="";this.gato.peso="";this.gato.diag_id="";console.log("Terminado");}
    });
    
  }
}