import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Salas } from './salas';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  //.-Ingresamos el endPoint del controlador de Salas
  private baseURL = "http://localhost:8080/salas";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeSalas(): Observable<Salas[]> {
    return this.httpClient.get<Salas[]>(`${this.baseURL}/listAll`);
  }

  registarSala(sala: Salas): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/save`, sala);
  }

  actualizarSala(id: number, sala: Salas): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, sala);
  }

  obtenerSalaPorId(id: number): Observable<Salas> {
    return this.httpClient.get<Salas>(`${this.baseURL}/get/${id}`);
  }

  eliminarSalaPorId(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        console.error('Error al eliminar la sala', error)
        throw error; // Puedes manejar el error de otra manera según tus necesidades
      }));
  }

}
