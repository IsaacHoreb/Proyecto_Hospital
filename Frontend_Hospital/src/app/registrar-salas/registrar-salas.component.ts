import { Component, OnInit } from '@angular/core';
import { Salas } from '../salas';
import { SalasService } from '../salas.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-salas',
  templateUrl: './registrar-salas.component.html',
  styleUrls: ['./registrar-salas.component.css']
})

export class RegistrarSalasComponent implements OnInit {

  sala: Salas = new Salas();

  constructor(private salaServices: SalasService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.guardarMedico();
    //console.log(this.sala);
  }

  guardarMedico() {
    this.salaServices.registarSala(this.sala).subscribe(dato => {
      this.irListaDeSalas();
    }), error => console.log(error);
  }

  irListaDeSalas() {
    this.router.navigate(['/salas']);
    swal('Sala Registrado', `El medico ${this.sala.type} ha sido registrado con éxito`, 'success');
  }

  tipoSala: string[] = ['CONSULTA', 'QUIROFANO', 'SALA_DE_ESPERA'];

}
