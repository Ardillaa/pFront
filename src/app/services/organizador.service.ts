import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
