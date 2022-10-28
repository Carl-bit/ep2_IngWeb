import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() {}

  email: string | undefined;
  password: string | undefined;

  login() {
    console.log(this.email);
    console.log(this.password);
  }
  ngOnInit(): void {
  }

}
