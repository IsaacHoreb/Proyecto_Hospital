import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citas } from './citas';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CitasService {

  //.-Ingresamos el endPoint del controlador de citas
  private baseURL = "http://localhost:8080/citas";

  constructor(private httpClient: HttpClient) { }

  registarCitas(citas: Citas): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/save`, citas);
  }

  obtenerListarDeCitas(): Observable<Citas[]> {
    return this.httpClient.get<Citas[]>(`${this.baseURL}/listAll`);
  }

  actualizarCitasPorId(id: number, citas: Citas): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, citas);
  }

  obtenerCitasPorId(id: number): Observable<Citas> {
    return this.httpClient.get<Citas>(`${this.baseURL}/get/${id}`);
  }

  eliminarCitasPorId(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        console.error('Error al eliminar la cita:', error);
        throw error; // Puedes manejar el error de otra manera según tus necesidades
      }));
  }




}
