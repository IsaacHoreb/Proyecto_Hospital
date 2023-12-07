import { Component, OnInit } from '@angular/core';
import { Pacientes } from '../pacientes';
import { PacientesService } from '../pacientes.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})

export class ListarPacientesComponent implements OnInit {

  pacientes: Pacientes[]; //Guardar los datos

  constructor(private pacienteServices: PacientesService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerPacienteLista();
  }

  //Metodos
  private obtenerPacienteLista() {
    this.pacienteServices.obtenerListaDePacientes().subscribe(datos => {
      this.pacientes = datos;
    });
  }

  actualizarPaciente(id: number) {
    this.router.navigate(['actualizarPacientes', id]);
  }

  detallesPaciente(id: number) {
    this.router.navigate(['pacienteDetalles', id]);
  }

  eliminarPaciente(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al Paciente",
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
        this.pacienteServices.eliminarPacientePoriD(id).subscribe(dato => {
          console.log(dato);
          this.obtenerPacienteLista();
          swal(
            'Paciente eliminado',
            'El Paciente ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}
