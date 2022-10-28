import { Component } from '@angular/core';

import datosFooter from 'src/assets/json/info.foot.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyect';
  datos: any = datosFooter;
}
/*
  *ngfor="let - of datos (tecnicamente)"
  y el llamado de deberia ser
  {{-.pedido}}

*/