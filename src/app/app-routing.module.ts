import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { ListarCarreraComponent } from './components/listar-carrera/listar-carrera.component';
import { CrearCarreraComponent } from './components/crear-carrera/crear-carrera.component';
import { ListarOrganizadorComponent } from './components/listar-organizador/listar-organizador.component';
import { AnadirOrganizadorComponent } from './components/anadir-organizador/anadir-organizador.component';

const routes: Routes = [
  { path: 'usuarios', component: ListarUsuarioComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent},
  { path: 'editar-usuaro/:id', component: CrearUsuarioComponent},
  { path: '', component: ListarCarreraComponent},
  { path: 'crear-carrera', component: CrearCarreraComponent},
  { path: 'editar-carrera/:id', component: CrearCarreraComponent},
  { path: 'listar-organizador/:id', component: ListarOrganizadorComponent},
  { path: 'anadir-organizador/:id', component: AnadirOrganizadorComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
