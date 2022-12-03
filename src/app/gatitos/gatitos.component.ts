import { Component, OnInit } from '@angular/core';

import { ServiceService, Gato} from '../servicios/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gatitos',
  templateUrl: './gatitos.component.html',
  styleUrls: ['./gatitos.component.scss']
})
export class GatitosComponent implements OnInit {

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
