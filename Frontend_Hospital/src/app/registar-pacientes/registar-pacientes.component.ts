import { Component, OnInit } from '@angular/core';
import { Pacientes } from '../pacientes';
import { PacientesService } from '../pacientes.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
//import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registar-pacientes',
  templateUrl: './registar-pacientes.component.html',
  styleUrls: ['./registar-pacientes.component.css']
})

export class RegistarPacientesComponent implements OnInit {

  pacientes: Pacientes = new Pacientes(); //Crear objeto

  constructor(private pacienteService: PacientesService, private router: Router) { }

  ngOnInit(): void {

  }

  //Lo que usaremos en el HTML
  onSubmit() {
    this.guardarPacientes();
    //console.log(this.pacientes);
  }


  //Metodos
  guardarPacientes() {
    this.pacienteService.registarPaciente(this.pacientes).subscribe(datos => {
      //console.log(datos);
      this.irListaPacientes();
    }), error => console.log(error);
  }

  irListaPacientes() {
    this.router.navigate(['/pacientes']);
    swal('Paciente Registrado', `El paciente ${this.pacientes.name} ha sido registrado con éxito`, 'success')
  }

  //Para tener los datos que quiero en el label
  generos: string[] = ['MASCULINO', 'FEMENINO', 'OTHERS'];

  //Agrego para selecionar de direciones
  address: string[] = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
    "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Estado de México",
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos",
    "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo",
    "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala",
    "Veracruz", "Yucatán", "Zacatecas", "extranjero"
  ];
}
