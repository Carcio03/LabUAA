import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './General/inicio/login/login.component';
import { HeaderComponent } from './General/header/header.component';
import { MenuComponent } from './General/inicio/menu/menu.component';
import { InicioComponent } from './General/inicio/inicio.component';
import { CampusComponent } from './General/inicio/campus/campus.component';
import { LaboratorioComponent } from './General/inicio/laboratorio/laboratorio.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    InicioComponent,
    CampusComponent,
    LaboratorioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
