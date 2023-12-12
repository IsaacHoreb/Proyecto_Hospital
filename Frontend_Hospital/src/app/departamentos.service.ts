import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamentos } from './departamentos';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  //.-Ingresamos el endPoint del controlador de departamentos
  private baseURL = "http://localhost:8080/departamentos";

  constructor(private httpClient: HttpClient) { }

  registarDepartamentos(depart: Departamentos): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/save`, depart);
  }

  obtenerListaDeDepartamentos(): Observable<Departamentos[]> {
    return this.httpClient.get<Departamentos[]>(`${this.baseURL}/listAll`);
  }

  actualizarDepartamentosPorId(id: number, depart: Departamentos): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`, depart);
  }

  obtenerDepartamentoPorId(id: number): Observable<Departamentos> {
    return this.httpClient.get<Departamentos>(`${this.baseURL}/get/${id}`);
  }

  eliminarDepartamentoPorId(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        console.error('Error al eliminar el departamento:', error);
        throw error; // Puedes manejar el error de otra manera según tus necesidades
      }));
  }










}
