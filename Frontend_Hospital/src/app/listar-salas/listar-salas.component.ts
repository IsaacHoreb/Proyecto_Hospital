import { Component, OnInit } from '@angular/core';
import { SalasService } from '../salas.service';
import { Router } from '@angular/router';
import { Salas } from '../salas';

@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.css']
})

export class ListarSalasComponent implements OnInit {

  sala: Salas[];

  constructor(private salaServices: SalasService, private router: Router) { }

  ngOnInit(): void {
    
  }

}
