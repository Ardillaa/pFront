import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizadorCarrera } from '../models/organizadorCarrera';


@Injectable({
  providedIn: 'root'
})

export class OrganizadorCarreraService {
  
  url = `${window.process.env['URL_BACK']}/api/carreras/`;

  constructor(private http: HttpClient) { }

  createOrganizadorCarrera(organizadorCarrera: OrganizadorCarrera[]): Observable<any>{
    console.log(this.url+'addOrganizadores/');
    console.log(organizadorCarrera);

    return this.http.post(this.url+'addOrganizadores/', organizadorCarrera);

  }
}
