import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service'; 

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  usuarioForm: FormGroup;
  titulo = "Crear Usuario";
  id: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: UsuarioService,
              private aRoute: ActivatedRoute){

    this.usuarioForm = this.fb.group({
      nombre: ['',Validators.required],
      apellidos: ['',Validators.required],
      ciudad: [''],
      telefono: ['',Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isEditar();
  }

  crearUsuarios(){
    console.log(this.usuarioForm);

    
    const USUARIO: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      apellidos: this.usuarioForm.get('apellidos')?.value,
      ciudad: this.usuarioForm.get('ciudad')?.value,
      telefono: this.usuarioForm.get('telefono')?.value
    }
    
    if(this.id !==null){
    
      this._usuarioService.editUsuario(this.id, USUARIO).subscribe( data => {
        this.toastr.success('El usuario se ha actualizado correctamente', 'Usuario Actualizado');
        this.router.navigate(['/']);

      }, error =>{
        this.toastr.error('No se ha podido actualizar el usuario','Error');
        this.usuarioForm.reset();
        console.log(error);
      } )

    }else{
      this._usuarioService.createUsuario(USUARIO).subscribe(data => {
          
          this.toastr.success('El usuario se ha añadido correctamente', 'Usuario Creado');
          this.router.navigate(['/']);

        }, error =>{
          this.toastr.error('No se ha podido crear el usuario','Error');
          this.usuarioForm.reset();
          console.log(error);
        } )
      }
  }

  isEditar() {
    if(this.id !==null){
      this.titulo = 'Editar Usuario';
      this._usuarioService.getUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          nombre: data.nombre,
          apellidos: data.apellidos,
          ciudad: data.ciudad,
          telefono: data.telefono
        })

      });
    }
  }


}
