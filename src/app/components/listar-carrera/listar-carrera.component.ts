import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Carrera } from 'src/app/models/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-listar-carrera',
  templateUrl: './listar-carrera.component.html',
  styleUrls: ['./listar-carrera.component.css']
})
export class ListarCarreraComponent {

  listCarreras: Carrera[] = [];

  constructor(private _carreraService: CarreraService,
              private toastr: ToastrService){ }

  ngOnInit(): void {
    this.getCarreras();
  }

  getCarreras() {
    this._carreraService.getCarreras().subscribe(data => {
      this.listCarreras= data;
    }, error => {
      console.log(error);
    })
  }

  deleteCarrera(id: any){
    this._carreraService.deleteCarrera(id).subscribe(data => {

      this.toastr.warning('La carrera fue eliminada con éxito','Carrera Eliminada');
      this.getCarreras();
    }, error => {
      this.toastr.error('No se ha podido eliminar la carrera','Error');
      console.log(error);
    })
  }

} 
 