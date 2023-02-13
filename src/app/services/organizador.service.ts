import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organizador } from '../models/organizador';
import { url } from '../utils/constants';


@Injectable({
  providedIn: 'root'
})
export class OrganizadorService {

  constructor(private http: HttpClient) { }

  getOrganizadores(): Observable<any>{
    return this.http.get(url + 'organizador');
  }

  getOrganizadoresCarrera(id:string): Observable<any>{
    return this.http.get(url + 'carreras/organizadores/' + id);
  }

  getOrganizadoresSinAsignar(id:string): Observable<any>{
    return this.http.get(url + 'carreras/organizadores/sin/' + id);
  }

  getOrganizador(id: string): Observable<any>{
    return this.http.get(url+'organizador/'+id);
  }

  createOrganizador(organizador: Organizador): Observable<any>{
    return this.http.post(url+'organizador/add/', organizador);
  }

  editOrganizador(id: string, organizador: Organizador): Observable<any>{
    return this.http.put(url+'organizador/edit/'+id, organizador);
  }

  deleteOrganizador(id: string): Observable<any>{
    return this.http.delete(url+'organizador/del/'+id);
  }

}
