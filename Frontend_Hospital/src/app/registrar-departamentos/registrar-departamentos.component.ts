import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../departamentos.service';
import { Router } from '@angular/router';
import { Departamentos } from '../departamentos';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-departamentos',
  templateUrl: './registrar-departamentos.component.html',
  styleUrls: ['./registrar-departamentos.component.css']
})

export class RegistrarDepartamentosComponent implements OnInit {

  departamento: Departamentos = new Departamentos();

  constructor(private departService: DepartamentosService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    //console.log(this.departamento);
    this.guardarDepart();
  }

  guardarDepart() {
    this.departService.registarDepartamentos(this.departamento).subscribe(dato => {
      this.irListaDepartamento();
    }), e => console.log(e);
  }

  irListaDepartamento() {
    this.router.navigate(['/departamentos']);
    swal('Departamento Registrado', `El departamento ha sido registrado con éxito`, 'success')
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
