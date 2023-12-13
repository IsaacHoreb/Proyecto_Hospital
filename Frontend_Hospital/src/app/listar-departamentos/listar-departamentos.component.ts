import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../departamentos.service';
import { Router } from '@angular/router';
import { Departamentos } from '../departamentos';

@Component({
  selector: 'app-listar-departamentos',
  templateUrl: './listar-departamentos.component.html',
  styleUrls: ['./listar-departamentos.component.css']
})

export class ListarDepartamentosComponent implements OnInit {

  departamento: Departamentos[];

  constructor(private departaServices: DepartamentosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerDepart();
  }

  private obtenerDepart() {
    this.departaServices.obtenerListaDeDepartamentos().subscribe(d => {
      this.departamento = d;
    }), e => console.log(e);
  }

  actualizarDepartamento(id: number) {
    this.router.navigate(['/actualizarDepartamento', id]);
  }

}
