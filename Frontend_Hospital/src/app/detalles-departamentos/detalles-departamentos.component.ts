import { Component, OnInit } from '@angular/core';
import { Departamentos } from '../departamentos';
import { DepartamentosService } from '../departamentos.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-departamentos',
  templateUrl: './detalles-departamentos.component.html',
  styleUrls: ['./detalles-departamentos.component.css']
})
export class DetallesDepartamentosComponent implements OnInit {

  id: number;
  departamento: Departamentos;

  constructor(private departServices: DepartamentosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departamento = new Departamentos();
    this.departServices.obtenerDepartamentoPorId(this.id).subscribe(dato => {
      this.departamento = dato;
      swal(`Detalles del departamento ${this.departamento.id}`);

    }), e => console.log(e);

  }

}
