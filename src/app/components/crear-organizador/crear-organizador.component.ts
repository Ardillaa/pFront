import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Organizador } from 'src/app/models/organizador';
import { OrganizadorService } from 'src/app/services/organizador.service';

@Component({
  selector: 'app-crear-organizador',
  templateUrl: './crear-organizador.component.html',
  styleUrls: ['./crear-organizador.component.css']
})
export class CrearOrganizadorComponent {

  organizadorForm: FormGroup;
  titulo = "Nueva Carrera";
  id: string | null;
  tituloBoton = "Crear";

  constructor(private fb: FormBuilder, 
              private router: Router,
              private toastr: ToastrService,
              private _organizadorService: OrganizadorService,
              private aRoute: ActivatedRoute){

    this.organizadorForm = this.fb.group({
      nombre: ['',Validators.required],
      apellidos: ['',Validators.required],
      dni: ['',Validators.required],
      ciudad: ['',Validators.required],
      telefono: ['',Validators.required],
      edad: [''],
      vehiculo: ['']
      
    });

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isEditar();
  }

  crearOrganizador(){
    console.log(this.organizadorForm);

    
    const ORGANIZADOR: Organizador = {
      nombre: this.organizadorForm.get('nombre')?.value,
      apellidos: this.organizadorForm.get('apellidos')?.value,
      dni: this.organizadorForm.get('dni')?.value,
      ciudad: this.organizadorForm.get('ciudad')?.value,
      telefono: this.organizadorForm.get('telefono')?.value,
      edad: this.organizadorForm.get('edad')?.value,
      vehiculo: this.organizadorForm.get('vehiculo')?.value
    }
    
    if(this.id !==null){
    
      this._organizadorService.editOrganizador(this.id, ORGANIZADOR).subscribe( data => {
        this.toastr.success('El organizador se ha actualizado correctamente', 'Organizador Actualizado');
        this.router.navigate(['/listar-organizador']);

      }, error =>{
        this.toastr.error('No se ha podido actualizar el organizador','Error');
        this.organizadorForm.reset();
        console.log(error);
      } )

    }else{
      this._organizadorService.createOrganizador(ORGANIZADOR).subscribe(data => {
          
          this.toastr.success('El organizador se ha añadido correctamente', 'Organizador Creado');
          this.router.navigate(['/listar-organizador']);

        }, error =>{
          this.toastr.error('No se ha podido crear el organizador','Error');
          this.organizadorForm.reset();
          console.log(error);
        } )
      }
  }

  isEditar() {
    if(this.id !==null){
      this.titulo = 'Editar Organizador';
      this.tituloBoton='Editar';
      this._organizadorService.getOrganizador(this.id).subscribe(data => {
        this.organizadorForm.setValue({
          nombre: data.nombre,
          apellidos: data.apellidos,
          dni: data.dni,
          ciudad: data.ciudad,
          telefono: data.telefono,
          edad: data.edad,
          vehiculo: data.vehiculo
        })

      });
    }
  }


}
