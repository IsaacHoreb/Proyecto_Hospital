import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Medicos } from '../medicos';
import { MedicoService } from '../medico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-medico',
  templateUrl: './actualizar-medico.component.html',
  styleUrls: ['./actualizar-medico.component.css']
})

export class ActualizarMedicoComponent implements OnInit {

  id: number;
  medico: Medicos = new Medicos();

  constructor(private medicoServices: MedicoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicoServices.obtenerMedicoPorId(this.id).subscribe(datos => {
      this.medico = datos;
    }), error => console.log(error);
  }

  irAlListaMedicos() {
    this.router.navigate(['/medicos']);
    swal('Medico Actualizado', `El medico ${this.medico.name} ha sido actualizado con éxito`, 'success')
  }

  onSubmit() {
    this.medicoServices.actualizarMedicos(this.id, this.medico).subscribe(datos => {
      this.irAlListaMedicos();
    }), error => console.log(error);
  }


  //Esta parte es donde guardamos los datos pre-cargados para el menu desplegable
  //Agrego para selecionar las especialidades
  especialization: string[] = ['CARDIOLOGIA', 'DERMATOLOGIA', 'ENDOCRINOLOGIA', 'GASTROENTEROLOGIA', 'GINECOLOGIA', 'NEUROLOGIA', 'OFTALMOLOGIA', 'ORTOPEDIA', 'PEDIATRIA', 'UROLOGIA'];

  //Agrego para selecionar de direciones
  address: string[] = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
    "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Estado de México",
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos",
    "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo",
    "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala",
    "Veracruz", "Yucatán", "Zacatecas", "extranjero"
  ];

  //Tiempo
  startTime = new FormControl(this.medico.startTime, [Validators.required]);
  endTime = new FormControl(this.medico.endTime, [Validators.required]);
  
}
