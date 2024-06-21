import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './General/inicio/login/login.component';
import { MenuComponent } from './General/inicio/menu/menu.component';
import { CampusComponent } from './General/inicio/campus/campus.component';
import { LaboratorioComponent } from './General/inicio/laboratorio/laboratorio.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'campus', component: CampusComponent},
  {path: 'laboratorio', component: LaboratorioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
