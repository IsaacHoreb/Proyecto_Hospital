import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Medicos } from './medicos';

@Injectable({
  providedIn: 'root'
})


export class MedicoService {

  //.-Ingresamos el endPoint del controlador de Medicos
  private baseURL = "http://localhost:8080/doctor";

  constructor(private httpClient: HttpClient) { } //Ingresamos el httpClient

  //metodo para listar
  obtenerListaDeMedicos(): Observable<Medicos[]> {
    return this.httpClient.get<Medicos[]>(`${this.baseURL}/listAll`);
  }

  //Creamos metodo de registrar medico
  registarMedicos(medico: Medicos): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/save`, medico);
  }

  //Creamos metodo de actualizar medico
  actualizarMedicos(id: number, medico: Medicos): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, medico);
  }

  //Creamos metodo de obtener por id
  obtenerMedicoPorId(id: number): Observable<Medicos> {
    return this.httpClient.get<Medicos>(`${this.baseURL}/get/${id}`);
  }

  //Creamos metodo de elimnar por id
  eliminarMedicoPorId(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        console.error('Error al eliminar el médico:', error);
        throw error; // Puedes manejar el error de otra manera según tus necesidades
      }));
  }

}
