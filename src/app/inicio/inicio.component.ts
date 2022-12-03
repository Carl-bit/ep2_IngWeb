import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService, User} from '../servicios/service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  ListarUser!: User[];

  user:User={
    user_id:"",
    email_user:"",
    pass:""
    
  }

  email: string = "";
  password: string = "";
  flag?: boolean;

  constructor(private ss:ServiceService,private ruta: Router) {}

  redirect(){
    console.log(this.email + this.password);
    this.ss.mostrarUser().subscribe({
      next: (res)=>{console.log(res); this.ListarUser=<any>res},
      error: (err)=>console.log(err),
      complete: ()=>console.log('completed')
    }
    );
  }

  ngOnInit(): void {
    this.flag = false;
  }

}
