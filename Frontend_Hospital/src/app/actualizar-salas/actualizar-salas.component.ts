import { Component, OnInit } from '@angular/core';
import { Salas } from '../salas';
import { SalasService } from '../salas.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-salas',
  templateUrl: './actualizar-salas.component.html',
  styleUrls: ['./actualizar-salas.component.css']
})

export class ActualizarSalasComponent implements OnInit {

  id: number;
  sala: Salas = new Salas();

  constructor(private salaService: SalasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.salaService.obtenerSalaPorId(this.id).subscribe(dato => {
      this.sala = dato;
    }), error => console.log(error);
  }

  onSubmit() {
    this.salaService.actualizarSala(this.id, this.sala).subscribe(dato => {
      this.irListaDeSalas();
    }), error => console.log(error);
  }

  irListaDeSalas() {
    this.router.navigate(['/salas']);
    swal('Sala Actualizado', `La sala ${this.sala.type} ha sido actualizado con éxito`, 'success')
  }

  tipoSala: string[] = ['CONSULTA', 'QUIROFANO', 'SALA_DE_ESPERA'];

}
