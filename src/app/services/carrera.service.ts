import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera } from 'src/app/models/carrera';
import { url } from '../utils/constants';


@Injectable({
  providedIn: 'root'
})

export class CarreraService {

  constructor(private http: HttpClient) { }

  getCarreras(): Observable<any>{
    return this.http.get(url+'carreras/');
  }

  getCarrera(id: string): Observable<any>{
    return this.http.get(url+'carreras/'+id);
  }

  deleteCarrera(id: string): Observable<any>{
    return this.http.delete(url+'carreras/del/'+id);
  } 

  createCarrera(carrera: Carrera): Observable<any>{
    return this.http.post(url+'carreras/add/', carrera);
  }

  editCarrera(id: string, carrera: Carrera): Observable<any>{
    return this.http.put(url+'carreras/edit/'+id, carrera);
  }
}
