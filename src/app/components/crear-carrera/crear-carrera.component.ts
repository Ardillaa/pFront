import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carrera } from 'src/app/models/carrera';
import { ToastrService } from 'ngx-toastr';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-crear-carrera',
  templateUrl: './crear-carrera.component.html',
  styleUrls: ['./crear-carrera.component.css']
})
export class CrearCarreraComponent {

    carreraForm: FormGroup;
    titulo = "Crear Usuario";
    id: string | null;
  
    constructor(private fb: FormBuilder, 
                private router: Router,
                private toastr: ToastrService,
                private _carreraService: CarreraService,
                private aRoute: ActivatedRoute){
  
      this.carreraForm = this.fb.group({
        nombre: ['',Validators.required],
        ciudad: ['',Validators.required],
        cinicio: [''],
        fecha: ['',Validators.required],
        numCorredores: [''],
        numOrganizadores: ['',Validators.required]
      });
 
      this.id = this.aRoute.snapshot.paramMap.get('id');
    }
  
    ngOnInit(): void {
      this.isEditar();
    }
  
    crearCarrera(){
      console.log(this.carreraForm);
  
      
      const CARRERA: Carrera = {
        nombre: this.carreraForm.get('nombre')?.value,
        cinicio: this.carreraForm.get('cinicio')?.value,
        ciudad: this.carreraForm.get('ciudad')?.value,
        fecha: this.carreraForm.get('fecha')?.value,
        numCorredores: this.carreraForm.get('numCorredores')?.value,
        numOrganizadores: this.carreraForm.get('numOrganizadores')?.value
      }
      
      if(this.id !==null){
      
        this._carreraService.editCarrera(this.id, CARRERA).subscribe( data => {
          this.toastr.success('El usuario se ha actualizado correctamente', 'Usuario Actualizado');
          this.router.navigate(['/']);
  
        }, error =>{
          this.toastr.error('No se ha podido actualizar el usuario','Error');
          this.carreraForm.reset();
          console.log(error);
        } )
  
      }else{
        this._carreraService.createCarrera(CARRERA).subscribe(data => {
            
            this.toastr.success('El usuario se ha añadido correctamente', 'Usuario Creado');
            this.router.navigate(['/']);
  
          }, error =>{
            this.toastr.error('No se ha podido crear el usuario','Error');
            this.carreraForm.reset();
            console.log(error);
          } )
        }
    }
  
    isEditar() {
      if(this.id !==null){
        this.titulo = 'Editar Carrera';
        this._carreraService.getCarrera(this.id).subscribe(data => {
          this.carreraForm.setValue({
            nombre: data.nombre,
            ciudad: data.ciudad,
            fecha: data.fecha,
            cinicio: data.cinicio,
            numCorredores: data.numCorredores,
            numOrganizadores: data.numOrganizadores
          })
  
        });
      }
    }
  

}
