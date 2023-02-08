import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizadorService {

  url = 'http://localhost:4000/api/carreras/';

  constructor(private http: HttpClient) { }

  getOrganizadoresCarrera(id:string): Observable<any>{
    return this.http.get(this.url + 'organizadores/' + id);
  }

  getOrganizadoresSinAsignar(id:string): Observable<any>{
    return this.http.get(this.url + 'organizadores/sin/' + id);
  }

}
