import { Component, OnInit } from '@angular/core';
import { Medicos } from '../medicos';
import { MedicoService } from '../medico.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css']
})

export class ListarMedicosComponent implements OnInit {

  medicos: Medicos[]; //Almacen de informacion para listar

  //Inyectamo el servicio creado
  constructor(private medicoServicio: MedicoService, private router: Router) { }

  //Creamos metodo para lista los medicos
  private obtenerMedicos() {
    this.medicoServicio.obtenerListaDeMedicos().subscribe(dato => {
      this.medicos = dato;
    })
  }

  ngOnInit(): void {
    this.obtenerMedicos();
  }

  //Creamos metodo para actualizar medicos
  actualizarMedicos(id: number) {
    this.router.navigate(['actualizarMedicos', id]);
  }

  verDetallesDelMedico(id: number) {
    this.router.navigate(['medicoDetalles', id]);
  }


  /*
  eliminarMedico(id: number) {
    this.medicoServicio.eliminarMedicoPorId(id).subscribe(datos => {
      this.obtenerMedicos();
      console.log(datos);
    });
  }*/

  eliminarMedico(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
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
        this.medicoServicio.eliminarMedicoPorId(id).subscribe(dato => {
          console.log(dato);
          this.obtenerMedicos();
          swal(
            'Medico eliminado',
            'El medico ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

}
/*
//Datos de pruebas
ngOnInit(): void {
  this.medicos = [{
    "id": 1,
    "name": "Lorena",
    "lastName": "Gonzalez",
    "age": 24,
    "especialization": "DERMATOLOGIA",
    "phone": "8985643434",
    "email": "loren34@hotmail.com",
    "address": "Tabasco",
    "startTime": "08:30:00",
    "endTime": "14:30:30"
  },
  {
    "id": 2,
    "name": "Lorena",
    "lastName": "Gonzalez",
    "age": 24,
    "especialization": "DERMATOLOGIA",
    "phone": "8985643434",
    "email": "loren34@hotmail.com",
    "address": "Tabasco",
    "startTime": "08:30:00",
    "endTime": "14:30:30"
  },
  {
    "id": 3,
    "name": "Lorena",
    "lastName": "Gonzalez",
    "age": 24,
    "especialization": "DERMATOLOGIA",
    "phone": "8985643434",
    "email": "loren34@hotmail.com",
    "address": "Tabasco",
    "startTime": "08:30:00",
    "endTime": "14:30:30"
  }
  ];
}
*/


