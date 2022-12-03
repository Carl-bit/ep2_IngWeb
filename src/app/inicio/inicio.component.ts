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
    this.ss.getInicio(this.email).subscribe({
      next: (res)=>{console.log(res);this.user=res;},
      error: (err)=>console.log(err),
      complete: ()=>console.log('completed')
    });

    if(this.user.email_user === this.email && this.user.pass === this.password){
      this.ruta.navigate(['/usuario']);
    }else{
      this.email ="";
      this.password = "";
      console.log("no coinciden las cosas");
    }

  }

  ngOnInit(): void {
    this.flag = false;
  }

}
