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
    return this.http.get(url);
  }

  getCarrera(id: string): Observable<any>{
    return this.http.get(url+id);
  }

  deleteCarrera(id: string): Observable<any>{
    return this.http.delete(url+'del/'+id);
  } 

  createCarrera(carrera: Carrera): Observable<any>{
    return this.http.post(url+'add/', carrera);
  }

  editCarrera(id: string, carrera: Carrera): Observable<any>{
    return this.http.put(url+'edit/'+id, carrera);
  }
}
