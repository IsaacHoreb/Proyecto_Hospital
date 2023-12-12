import { Component, OnInit } from '@angular/core';
import { Citas } from '../citas';
import { CitasService } from '../citas.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-citas',
  templateUrl: './detalles-citas.component.html',
  styleUrls: ['./detalles-citas.component.css']
})
export class DetallesCitasComponent implements OnInit {

  id: number;
  cita: Citas;

  constructor(private citasServices: CitasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cita = new Citas();
    this.citasServices.obtenerCitasPorId(this.id).subscribe(datos => {
      this.cita = datos;
      swal(`Detalles de la cita ${this.cita.id}`);
    }), e => console.log(e);
  }

}
