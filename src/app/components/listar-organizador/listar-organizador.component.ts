import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Organizador } from 'src/app/models/organizador';
import { OrganizadorService } from 'src/app/services/organizador.service';

@Component({
  selector: 'app-listar-organizador',
  templateUrl: './listar-organizador.component.html',
  styleUrls: ['./listar-organizador.component.css']
})
export class ListarOrganizadorComponent {

  id: string | null;

  listOrganizadores: Organizador[] = []; 

  constructor(private _organizadorService: OrganizadorService,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute){ 

      this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getOrganizadores();
  }

  getOrganizadores() {
    if(this.id!=null){
      this._organizadorService.getOrganizadoresCarrera(this.id).subscribe(data => {
        this.listOrganizadores= data;
      }, error => {
        console.log(error);
      })
    }
  }

  deleteOrganizador(id: any){

   /* this._ca.deleteCarrera(id).subscribe(data => {

      this.toastr.warning('La carrera fue eliminada con éxito','Carrera Eliminada');
      this.getCarreras();
    }, error => {
      this.toastr.error('No se ha podido eliminar la carrera','Error');
      console.log(error);
    })
    */
  }

}
