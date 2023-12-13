import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../departamentos.service';
import { Router } from '@angular/router';
import { Departamentos } from '../departamentos';
import swal from 'sweetalert2';

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

  verDetallesDepartamentos(id: number) {
    this.router.navigate(['/departamentoDetalles', id]);
  }

  eliminarDepartamento(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el departamento",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.departaServices.eliminarDepartamentoPorId(id).subscribe(dato => {
          console.log(dato);
          this.obtenerDepart();
          swal(
            'Departamento eliminado',
            'El departamento ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }


}
