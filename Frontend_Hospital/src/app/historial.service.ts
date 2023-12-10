import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Historial } from './historial';

@Injectable({
  providedIn: 'root'
})

export class HistorialService {

  //.-Ingresamos el endPoint del controlador de Historial
  private baseURL = "http://localhost:8080/historial";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeHistorial(): Observable<Historial[]> {
    return this.httpClient.get<Historial[]>(`${this.baseURL}/listAll`);
  }

  registarHitorial(historial: Historial): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/save`, historial);
  }

  actualizarHistorial(id: number, historial: Historial): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, historial);
  }

  obtenerHistorialPorId(id: number): Observable<Historial> {
    return this.httpClient.get<Historial>(`${this.baseURL}/get/${id}`);
  }

  eliminarHistorialPorId(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        console.error('Error al eliminar el médico:', error);
        throw error; // Puedes manejar el error de otra manera según tus necesidades
      }));
  }

}
