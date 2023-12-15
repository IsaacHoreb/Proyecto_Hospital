import { Component, OnInit } from '@angular/core';
import { SalasService } from '../salas.service';
import { Router } from '@angular/router';
import { Salas } from '../salas';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.css']
})

export class ListarSalasComponent implements OnInit {

  sala: Salas[];

  constructor(private salaServices: SalasService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerSalaLista();
  }

  private obtenerSalaLista() {
    this.salaServices.obtenerListaDeSalas().subscribe(dato => {
      this.sala = dato;
    }), error => console.log(error);
  }

  actualializarSalaPorID(id: number) {
    this.router.navigate(['/actualizarSala', id])
  }

  detallesSalasID(id: number) {
    this.router.navigate(['/salaDetalles', id]);
  }

  eliminarSalaPorId(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la sala",
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
        this.salaServices.eliminarSalaPorId(id).subscribe(dato => {
          //console.log(dato);
          this.obtenerSalaLista();
          swal(
            'Sala eliminado',
            'La sala ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}
