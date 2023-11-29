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

  constructor(private httpClient: HttpClient) { } //Ingresamos el httpClient

  //metodo para listar
  obtenerListaDeMedicos(): Observable<Medicos[]> {
    return this.httpClient.get<Medicos[]>(`${this.baseURL}`);
  }



}
