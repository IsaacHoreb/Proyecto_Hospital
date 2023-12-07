import { Component, OnInit } from '@angular/core';
import { Pacientes } from '../pacientes';
import { PacientesService } from '../pacientes.service';
import { Router } from '@angular/router';

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

}
