import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { ListarCarreraComponent } from './components/listar-carrera/listar-carrera.component';
import { CrearCarreraComponent } from './components/crear-carrera/crear-carrera.component';
import { ListarOrganizadorComponent } from './components/listar-organizador/listar-organizador.component';
import { AnadirOrganizadorComponent } from './components/anadir-organizador/anadir-organizador.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    ListarCarreraComponent,
    CrearCarreraComponent,
    ListarOrganizadorComponent,
    AnadirOrganizadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
