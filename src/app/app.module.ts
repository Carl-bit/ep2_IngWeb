import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { MedidasComponent } from './medidas/medidas.component';
import { PatologiasComponent } from './patologias/patologias.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { ModificarComponent } from './modificar/modificar.component';
import {HttpClientModule} from '@angular/common/http';

import { CuidadosComponent } from './cuidados/cuidados.component';

//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GatitosComponent } from './gatitos/gatitos.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    HeaderComponent,
    RegistroComponent,
    PrincipalComponent,
    MedidasComponent,
    PatologiasComponent,
    InicioComponent,
    UsuarioComponent,
    CuidadosComponent,
    FooterComponent,
    ModificarComponent,
    PerfilComponent,
    GatitosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbCarouselModule,
    FlexLayoutModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
