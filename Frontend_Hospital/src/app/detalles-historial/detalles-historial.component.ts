import { Component, OnInit } from '@angular/core';
import { Historial } from '../historial';
import { HistorialService } from '../historial.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-historial',
  templateUrl: './detalles-historial.component.html',
  styleUrls: ['./detalles-historial.component.css']
})

export class DetallesHistorialComponent implements OnInit {

  id: number;
  historial: Historial;

  constructor(private historialServices: HistorialService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.historial = new Historial();
    this.historialServices.obtenerHistorialPorId(this.id).subscribe(datos => {
      this.historial = datos;
      swal(`Detalles del Historial Medico ${this.historial.id}`);
    }), error => console.log(error);

  }

}
