import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Pacientes } from './pacientes';

@Injectable({
  providedIn: 'root'
})

export class PacientesService {

  //.-Ingresamos el endPoint del controlador de Pacientes
  private baseURL = "http://localhost:8080/paciente";

  constructor(private httpClient: HttpClient) { } //Ingresamos el httpClient

  //metodo para listar
  obtenerListaDePacientes(): Observable<Pacientes[]> {
    return this.httpClient.get<Pacientes[]>(`${this.baseURL}/listAll`);
  }

  //Metodo para registar
  registarPaciente(paciente: Pacientes): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/save`, paciente);
  }

  //Metodo para actulizar
  actualizarPaciente(id: number, paciente: Pacientes): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, paciente)
  }

  //Metodo de obtener paciente por ID
  obtenerPacientePorId(id: number): Observable<Pacientes> {
    return this.httpClient.get<Pacientes>(`${this.baseURL}/get/${id}`);
  }

  //Metodo para eliminar un paciente por Id
  eliminarPacientePoriD(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        console.error('Error al eliminar el paciente', error);
        throw error; // Puedes manejar el error de otra manera según tus necesidades
      }));
  }
}
