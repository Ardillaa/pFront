import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {
 
  listUsuarios: Usuario[] = [];

  constructor(private _usuarioService: UsuarioService,
              private toastr: ToastrService){ }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios= data;
    }, error => {
      console.log(error);
    })
  }

  deleteUsuario(id: any){
    this._usuarioService.deleteUsuario(id).subscribe(data => {

      this.toastr.warning('El usuario fue eliminado con éxito','Usuario Eliminado');
      this.getUsuarios();
    }, error => {
      this.toastr.error('No se ha podido eliminar el usuario','Error');
      console.log(error);
    })
  }


}
