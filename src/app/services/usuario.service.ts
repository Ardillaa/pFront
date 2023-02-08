import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:4000/api/running/';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get(this.url);
  }

  getUsuario(id: string): Observable<any>{
    return this.http.get(this.url+id);
  }

  deleteUsuario(id: string): Observable<any>{
    return this.http.delete(this.url+id);
  } 

  createUsuario(usuario: Usuario): Observable<any>{
    return this.http.post(this.url, usuario);
  }

  editUsuario(id: string, usuario: Usuario): Observable<any>{
    return this.http.put(this.url+id, usuario);
  }
}
