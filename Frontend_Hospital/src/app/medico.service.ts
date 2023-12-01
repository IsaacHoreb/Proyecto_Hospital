import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicos } from './medicos';

@Injectable({
  providedIn: 'root'
})


export class MedicoService {

  //.-Ingresamos el endPoint de la listar medicos
  private baseURL = "http://localhost:8080/doctor/listAll";
  private baseURL2 = "http://localhost:8080/doctor/save";

  constructor(private httpClient: HttpClient) { } //Ingresamos el httpClient

  //metodo para listar
  obtenerListaDeMedicos(): Observable<Medicos[]> {
    return this.httpClient.get<Medicos[]>(`${this.baseURL}`);
  }

  //Creamos metodo de registrar medico
  registarMedicos(medico: Medicos): Observable<Object> {
    return this.httpClient.post(`${this.baseURL2}`, medico);
  }


}
