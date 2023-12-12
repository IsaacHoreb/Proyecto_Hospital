import { Component, OnInit } from '@angular/core';
import { Citas } from '../citas';
import { CitasService } from '../citas.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

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

  verDetallesCitas(id: number) {
    this.router.navigate(['/citasDetalles', id]);
  }

  eliminarHistorial(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la cita",
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
        this.citasServices.eliminarCitasPorId(id).subscribe(dato => {
          console.log(dato);
          this.obtenerCitas();
          swal(
            'Cita eliminada',
            'La cita ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}
