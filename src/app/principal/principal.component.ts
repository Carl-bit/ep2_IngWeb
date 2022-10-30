import { Component, OnInit } from '@angular/core';

import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  peliculas:any[]=[
    {name:'Bienvenidos',
    img:'assets/gato1.jpg',
    desc:'En Wild Wild Pussycats buscamos la incentivación del cuidado y preocupaciones por los felinos.'},
    {
      name:'Traviesos',
      img:'assets/gato2.jpg',
      desc:'Comprender el comportamiento de los felinos por explorar su mundo puede ser caotico, pero no el fin.'
    },
    {
      name:'Delicados',
      img:'assets/gato3.jpg',
      desc:'Sin embargo necesitan un cuidado especificos, y nosotros te enseñaremos como'
    }
  ];

  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
  }

  ngOnInit() {
  }


  
}
