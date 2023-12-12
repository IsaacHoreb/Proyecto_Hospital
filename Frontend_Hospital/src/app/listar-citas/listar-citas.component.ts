import { Component, OnInit } from '@angular/core';
import { Citas } from '../citas';
import { CitasService } from '../citas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})

export class ListarCitasComponent implements OnInit {

  citas: Citas[];

  constructor(private citasServices: CitasService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCitas();

  }

  private obtenerCitas() {
    this.citasServices.obtenerListarDeCitas().subscribe(datos => {
      this.citas = datos;
    }), error => console.log(error);
  }

  actualizarCitas(id: number) {
    this.router.navigate(['/actualizarCitas', id]);
  }

}
