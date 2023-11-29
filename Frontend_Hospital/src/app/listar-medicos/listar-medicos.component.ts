import { Component, OnInit } from '@angular/core';
import { Medicos } from '../medicos';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css']
})

export class ListarMedicosComponent implements OnInit {

  medicos: Medicos[]; //Almacen de informacion para listar

  //Inyectamo el servicio creado
  constructor(private medicoServicio: MedicoService) { }

  //Creamos metodo para lista los medicos
  private obtenerMedicos() {
    this.medicoServicio.obtenerListaDeMedicos().subscribe(dato => {
      this.medicos = dato;
    })
  }

  ngOnInit(): void {
    this.obtenerMedicos();
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


