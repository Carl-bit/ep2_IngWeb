import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {ContactoComponent} from './contacto/contacto.component';
import { PrincipalComponent } from './principal/principal.component';
import {RegistroComponent} from './registro/registro.component';
import { MedidasComponent } from './medidas/medidas.component';
import { PatologiasComponent } from './patologias/patologias.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path:'', component:PrincipalComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'registro', component:  RegistroComponent},
  { path: 'medidas', component: MedidasComponent },
  { path: 'patologias', component: PatologiasComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'usuario', component: UsuarioComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
