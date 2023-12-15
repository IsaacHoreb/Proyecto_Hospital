import { Component, OnInit } from '@angular/core';
import { Salas } from '../salas';
import { SalasService } from '../salas.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-salas',
  templateUrl: './detalles-salas.component.html',
  styleUrls: ['./detalles-salas.component.css']
})

export class DetallesSalasComponent implements OnInit {

  id: number;
  sala: Salas = new Salas();

  constructor(private salaService: SalasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.salaService.obtenerSalaPorId(this.id).subscribe(dato => {
      this.sala = dato;
      swal(`Detalles de la sala ${this.sala.id}`);
    }), error => console.log(error);

  }

}
