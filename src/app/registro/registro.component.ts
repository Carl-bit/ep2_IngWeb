import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl,FormArray, Validators, NgForm } from '@angular/forms';
interface ContactForm
{
  "name": "",
  "edad": "",
  "direccion": "",
  "correo": "",
  "sexo": ""
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  model={
    name: "",
    edad: "",
    direccion: "",
    correo: "",
    sexo: ""
  }

  constructor() { }
  

  ngOnInit(): void {
  }

  onSubmit(form:NgForm):void{
    console.log('Form values',form)
  }

}
