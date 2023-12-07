import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pacientes } from '../pacientes';
import { PacientesService } from '../pacientes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-pacientes',
  templateUrl: './detalles-pacientes.component.html',
  styleUrls: ['./detalles-pacientes.component.css']
})

export class DetallesPacientesComponent {

  id: number;
  paciente: Pacientes;

  constructor(private route: ActivatedRoute, private pacienteServicio: PacientesService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.paciente = new Pacientes();
    this.pacienteServicio.obtenerPacientePorId(this.id).subscribe(datos => {
      this.paciente = datos;
      swal(`Detalles del Paciente ${this.paciente.name}`);
    });

  }


} 
