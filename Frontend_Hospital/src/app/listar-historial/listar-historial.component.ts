import { Component, OnInit } from '@angular/core';
import { Historial } from '../historial';
import { HistorialService } from '../historial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-historial',
  templateUrl: './listar-historial.component.html',
  styleUrls: ['./listar-historial.component.css']
})

export class ListarHistorialComponent implements OnInit {

  historial: Historial[]; //Objeto en Array

  constructor(private historialSerices: HistorialService, private router: Router) { }

  private obtenerHistorial() {
    this.historialSerices.obtenerListaDeHistorial().subscribe(datos => {
      this.historial = datos;
    }), error => console.log(error);
  }

  ngOnInit(): void {
    this.obtenerHistorial();

  }

}
