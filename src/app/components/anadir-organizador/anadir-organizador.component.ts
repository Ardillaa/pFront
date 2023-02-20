import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Asignar } from 'src/app/models/asignar';
import { Organizador } from 'src/app/models/organizador';
import { OrganizadorCarrera } from 'src/app/models/organizadorCarrera';
import { OrganizadorCarreraService } from 'src/app/services/carrera-organizador.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { OrganizadorService } from 'src/app/services/organizador.service';



@Component({
  selector: 'app-anadir-organizador',
  templateUrl: './anadir-organizador.component.html',
  styleUrls: ['./anadir-organizador.component.css']
})
export class AnadirOrganizadorComponent {
  id: string | null;
  organizadoresForm: FormGroup;
  nuevo: Asignar| null;
  carrera: string| null;

  listOrganizadores: Organizador[] = [];
  listOrganizadoresCheck: Asignar[] =[];
  listOrganizadoresCarrera: OrganizadorCarrera[] =[];

  constructor(private fb: FormBuilder,
              private _organizadorService: OrganizadorService,
              private _organizadorCarreraService: OrganizadorCarreraService,
              private toastr: ToastrService,
              private router: Router,
              private aRoute: ActivatedRoute,
              private _carreraService: CarreraService){ 

    this.organizadoresForm = this.fb.group({
      asignado: ['']
    });
    this.nuevo = new Asignar('',false);
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.carrera="";
    }

ngOnInit(): void {
  this.getOrganizadores();
  this.getNombreCarrera();
}

getOrganizadores() {
  if(this.id!=null){

    this._organizadorService.getOrganizadoresSinAsignar(this.id).subscribe(data => {
      this.listOrganizadores= data;
      data.forEach((element: { _id: number; } | null) => {
        if(element!=null){
          this.nuevo = new Asignar(String(element._id),false)     
        }
        if(this.nuevo !=null){
          this.listOrganizadoresCheck.push(this.nuevo);
        }
      });
    
    }, error => {
      console.log(error);
    });
  }
}


anadirOrganizadores(){
  this.listOrganizadoresCheck.forEach(element => {
    if(this.id!=null && element.check){
      this.listOrganizadoresCarrera.push({idCarrera: this.id, idOrganizador: String(element._id)});
    }
  })
  this._organizadorCarreraService.createOrganizadorCarrera(this.listOrganizadoresCarrera).subscribe(data => {
            
    this.toastr.success('La relación se ha añadido correctamente', 'Usuario Añadido');
    this.router.navigate(['/listar-organizador/'+this.id]);

  }, error =>{
    this.toastr.error('No se ha podido añadir el usuario','Error');
    console.log(error);
  } );
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

onCheckboxChange(e: any) {
  this.listOrganizadoresCheck.forEach(element => {
    if(element._id == e.target.value){
      element.check = e.target.checked;
    }
  })
}


filtroNombre(evento:any) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  console.log(evento.target.value);
  filter = evento.target.value.toUpperCase();
  table = document.getElementById("tablaOrganizadores");
  if(table!=null){
    tr = table.getElementsByTagName("tr");
    
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

filtroDNI(evento:any) {
  // Declare variables
  var h, filter, table, tr, td, i, txtValue;
  console.log(evento.target.value);
  filter = evento.target.value.toUpperCase();
  table = document.getElementById("tablaOrganizadores");
  if(table!=null){
    tr = table.getElementsByTagName("tr");
    
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        
        }
    }
  }
}


}