import { Component, OnInit } from '@angular/core';
import { Medicos } from '../medicos';
import { MedicoService } from '../medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-medicos',
  templateUrl: './registar-medicos.component.html',
  styleUrls: ['./registar-medicos.component.css']
})

//Agrego e importe
export class RegistarMedicosComponent implements OnInit {

  medico: Medicos = new Medicos();

  //Agrego para selecionar las especialidades
  especialization: string[] = ['CARDIOLOGIA', 'DERMATOLOGIA', 'ENDOCRINOLOGIA', 'GASTROENTEROLOGIA', 'GINECOLOGIA', 'NEUROLOGIA', 'OFTALMOLOGIA', 'ORTOPEDIA', 'PEDIATRIA', 'UROLOGIA'];

  //Agrego para selecionar de direciones
  address: string[] = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
    "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Estado de México",
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos",
    "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo",
    "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala",
    "Veracruz", "Yucatán", "Zacatecas", "extrangero"
  ];



  constructor(private medicoServicio: MedicoService, private router: Router) { }

  guardarMedicos() {
    this.medicoServicio.registarMedicos(this.medico).subscribe(datos => {
      console.log(datos);
      this.irListaMedicos();
    }, error => console.log(error));
  }

  irListaMedicos() {
    this.router.navigate(['/medicos']);
  }


  onSubmit() { //Para acceder a medico
    this.guardarMedicos();
    console.log(this.medico)
  }

  ngOnInit(): void {

  }

}
