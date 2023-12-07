import { Component, OnInit } from '@angular/core';
import { Pacientes } from '../pacientes';
import { PacientesService } from '../pacientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-pacientes',
  templateUrl: './actualizar-pacientes.component.html',
  styleUrls: ['./actualizar-pacientes.component.css']
})

export class ActualizarPacientesComponent implements OnInit {

  id: number;
  pacientes: Pacientes = new Pacientes();

  //Metodo constructor
  constructor(private pacienteServices: PacientesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pacienteServices.obtenerPacientePorId(this.id).subscribe(datos => {
      this.pacientes = datos;
    }), error => console.log(error);
  }

  irListaPaciente() {
    this.router.navigate(['/pacientes']);
    swal('Paciente Actualizado', `El Paciente ${this.pacientes.name} ha sido actualizado con éxito`, 'success')
  }

  //Usar para actulizacion por el HTML
  onSubmit() { 
    this.pacienteServices.actualizarPaciente(this.id, this.pacientes).subscribe(datos => {
      this.irListaPaciente();
    }), error => console.log(error);
  }


  //Para tener los datos que quiero en el label
  generos: string[] = ['MASCULINO', 'FEMENINO', 'OTHERS'];

  //Agrego para selecionar de direciones
  address: string[] = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
    "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Estado de México",
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos",
    "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo",
    "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala",
    "Veracruz", "Yucatán", "Zacatecas", "extranjero"
  ];

}
