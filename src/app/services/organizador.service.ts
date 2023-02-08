import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../utils/constants';


@Injectable({
  providedIn: 'root'
})
export class OrganizadorService {

  constructor(private http: HttpClient) { }

  getOrganizadoresCarrera(id:string): Observable<any>{
    return this.http.get(url + 'organizadores/' + id);
  }

  getOrganizadoresSinAsignar(id:string): Observable<any>{
    return this.http.get(url + 'organizadores/sin/' + id);
  }

}
