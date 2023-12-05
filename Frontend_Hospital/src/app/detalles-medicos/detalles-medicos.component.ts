import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Medicos } from '../medicos';
import { MedicoService } from '../medico.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-medicos',
  templateUrl: './detalles-medicos.component.html',
  styleUrls: ['./detalles-medicos.component.css']
})

export class DetallesMedicosComponent implements OnInit {

  id: number;
  medico: Medicos;

  constructor(private route: ActivatedRoute, private medicoServicio: MedicoService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.medico = new Medicos();
    this.medicoServicio.obtenerMedicoPorId(this.id).subscribe(datos => {
      this.medico = datos;
      swal(`Detalles del Medico ${this.medico.name}`);
    });

  }

}
