import { Component, OnInit } from '@angular/core';
import { Departamentos } from '../departamentos';
import { DepartamentosService } from '../departamentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-departamentos',
  templateUrl: './actualizar-departamentos.component.html',
  styleUrls: ['./actualizar-departamentos.component.css']
})
export class ActualizarDepartamentosComponent implements OnInit {

  id: number;
  departamento: Departamentos = new Departamentos();

  constructor(private deparServices: DepartamentosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.deparServices.obtenerDepartamentoPorId(this.id).subscribe(d => {
      this.departamento = d;
    }), e => console.log(e);
  }

  onSubmit() {
    this.deparServices.actualizarDepartamentosPorId(this.id, this.departamento).subscribe(dato => {
      this.irListaDepartamentos();
    }), e => console.log(e);
  }

  irListaDepartamentos() {
    this.router.navigate(['/departamentos']);
    swal('Departamento Actualizado', `El departamento ${this.departamento.id} ha sido actualizado con éxito`, 'success')
  }

  nameDepartam: string[] = [
    'MEDICINA_INTERNA',
    'CIRUGIA_GENERAL',
    'PEDIATRIA',
    'GINECOLOGIA_OBSTETRICIA',
    'CARDIOLOGIA',
    'ORTOPEDIA',
    'DERMATOLOGIA',
    'NEUROLOGIA',
    'OFTALMOLOGIA',
    'UROLOGIA'];

}
