import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {ContactoComponent} from './contacto/contacto.component';
import { PrincipalComponent } from './principal/principal.component';
import {RegistroComponent} from './registro/registro.component';

const routes: Routes = [
  {path:'', component:PrincipalComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'registro', component:  RegistroComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
