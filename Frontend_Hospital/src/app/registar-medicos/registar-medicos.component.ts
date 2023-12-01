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
