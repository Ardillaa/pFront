import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizadorCarrera } from '../models/organizadorCarrera';
import { url } from '../utils/constants';


@Injectable({
  providedIn: 'root'
})

export class OrganizadorCarreraService {

  constructor(private http: HttpClient) { }

  createOrganizadorCarrera(organizadorCarrera: OrganizadorCarrera[]): Observable<any>{
    return this.http.post(url+'addOrganizadores/', organizadorCarrera);
  }
}
