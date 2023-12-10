import { Component, OnInit } from '@angular/core';
import { Historial } from '../historial';
import { HistorialService } from '../historial.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

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

  actualizarHistorial(id: number) {
    this.router.navigate(['actualizarHistorial', id]);
  }

  verDetallesHistorial(id: number) {
    this.router.navigate(['historialDetalles', id]);
  }

  eliminarHistorial(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el historial",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.historialSerices.eliminarHistorialPorId(id).subscribe(dato => {
          console.log(dato);
          this.obtenerHistorial();
          swal(
            'Historial eliminado',
            'El historial ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}
