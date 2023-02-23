import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCarreraComponent } from './components/listar-carrera/listar-carrera.component';
import { CrearCarreraComponent } from './components/crear-carrera/crear-carrera.component';
import { ListarOrganizadorComponent } from './components/listar-organizador/listar-organizador.component';
import { AnadirOrganizadorComponent } from './components/anadir-organizador/anadir-organizador.component';
import { CrearOrganizadorComponent } from './components/crear-organizador/crear-organizador.component';
import { VerCarreraComponent } from './components/ver-carrera/ver-carrera.component';

const routes: Routes = [
  { path: '', component: ListarCarreraComponent},
  { path: 'crear-carrera', component: CrearCarreraComponent},
  { path: 'editar-carrera/:id', component: CrearCarreraComponent},
  { path: 'ver-carrera/:id', component: VerCarreraComponent},
  { path: 'listar-organizador/:id', component: ListarOrganizadorComponent},
  { path: 'listar-organizador', component: ListarOrganizadorComponent},
  { path: 'anadir-organizador/:id', component: AnadirOrganizadorComponent},
  { path: 'crear-organizador', component: CrearOrganizadorComponent},
  { path: 'editar-organizador/:id', component: CrearOrganizadorComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
