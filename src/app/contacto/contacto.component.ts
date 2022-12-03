import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, Validators, NgForm } from '@angular/forms';
import { ServiceService, Gato} from '../servicios/service.service';
import { Router } from '@angular/router';

interface ContactForm
{
  "name": "",
  "peso": "",
  "pelaje": "",
  "sexo": "",
  "comment": ""
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  ListarGatos!: Gato[];
  constructor(private ss:ServiceService, private ruta:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo(){
    this.ss.mostrarGatos().subscribe({
      next: (res)=>{console.log(res); this.ListarGatos=<any>res},
      error: (err)=>console.log(err),
      complete: ()=>console.log('completed')
    }
    );
  }

}