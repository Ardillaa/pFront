import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Organizador } from 'src/app/models/organizador';
import { OrganizadorCarrera } from 'src/app/models/organizadorCarrera';
import { OrganizadorCarreraService } from 'src/app/services/carrera-organizador.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { OrganizadorService } from 'src/app/services/organizador.service';

@Component({
  selector: 'app-listar-organizador',
  templateUrl: './listar-organizador.component.html',
  styleUrls: ['./listar-organizador.component.css']
})
export class ListarOrganizadorComponent {

  general: boolean | null;
  id: string | null;
  titulo: string |null;
  orgCarrera: OrganizadorCarrera | null;
  carrera: string | null;

  listOrganizadores: Organizador[] = []; 

  constructor(private _organizadorService: OrganizadorService,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute,
              private _organizadorCarreraService: OrganizadorCarreraService,
              private _carreraService: CarreraService){ 

      this.id = this.aRoute.snapshot.paramMap.get('id');
      this.orgCarrera = new OrganizadorCarrera("","");
      this.general=false;
      this.titulo = "Lista de Organizadores";
      this.carrera = "";
  }

  ngOnInit(): void {
    if(this.id!=null){
        this.getNombreCarrera();
        this.getOrganizadoresConId();
        this.titulo="Organizadores apuntados";
    }else{
      this.getOrganizadores();
      this.general=true;
    }
  }

  getOrganizadores() {
      this._organizadorService.getOrganizadores().subscribe(data => {
        this.listOrganizadores= data;
      }, error => {
        console.log(error);
      })
  }

  getNombreCarrera() {
    if(this.id!=null){
      this._carreraService.getCarrera(this.id).subscribe(data => {
        this.carrera= data.nombre;
      }, error => {
        console.log(error);
      })
    }
  }

  getOrganizadoresConId() {
    if(this.id!=null){
      this._organizadorService.getOrganizadoresCarrera(this.id).subscribe(data => {
        this.listOrganizadores= data;
      }, error => {
        console.log(error);
      })
    }
  }

  deleteOrganizador(org_id: any, id:any){
    
    if(id!=null){
      this.orgCarrera = new OrganizadorCarrera(id, org_id);
      console.log(this.orgCarrera);

      this._organizadorCarreraService.deleteOrganizadorCarrera(this.orgCarrera).subscribe(data => {

        this.toastr.warning('El organizador fue eliminada con éxito','Organizador Eliminado');
        this.getOrganizadoresConId();
      }, error => {
        this.toastr.error('No se ha podido eliminar el organizador','Error');
        console.log(error);
      })
    }
    else{
      console.log("lista org");
      this._organizadorService.deleteOrganizador(org_id).subscribe(data => {

        this.toastr.warning('El organizador fue eliminada con éxito','Organizador Eliminado');
        this.getOrganizadores();
      }, error => {
        this.toastr.error('No se ha podido eliminar el organizador','Error');
        console.log(error);
      })
    }
    
  }

}
