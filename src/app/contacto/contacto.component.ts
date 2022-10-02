import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, Validators, NgForm } from '@angular/forms';
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

  model={
    name: "",
    peso: "",
    pelaje: "",
    sexo: "",
    comment: ""
  }

  constructor() { }
  

  ngOnInit(): void {
  }

  onSubmit(form:NgForm):void{
    console.log('Form values',form)
  }

}