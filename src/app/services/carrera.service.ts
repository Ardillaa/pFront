import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera } from 'src/app/models/carrera';


@Injectable({
  providedIn: 'root'
})

export class CarreraService {

  url = 'http://localhost:4000/api/carreras/';

  constructor(private http: HttpClient) { }

  getCarreras(): Observable<any>{
    return this.http.get(this.url);
  }

  getCarrera(id: string): Observable<any>{
    return this.http.get(this.url+id);
  }

  deleteCarrera(id: string): Observable<any>{
    console.log(this.url+'del/'+id);
    return this.http.delete(this.url+'del/'+id);
  } 

  createCarrera(carrera: Carrera): Observable<any>{
    return this.http.post(this.url+'add/', carrera);
  }

  editCarrera(id: string, carrera: Carrera): Observable<any>{
    console.log(this.url+'edit/'+id);
    return this.http.put(this.url+'edit/'+id, carrera);
  }
}
