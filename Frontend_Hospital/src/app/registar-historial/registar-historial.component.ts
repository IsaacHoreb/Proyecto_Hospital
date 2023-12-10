import { Component, OnInit } from '@angular/core';
import { Historial } from '../historial';
import { HistorialService } from '../historial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-historial',
  templateUrl: './registar-historial.component.html',
  styleUrls: ['./registar-historial.component.css']
})
export class RegistarHistorialComponent implements OnInit {

  historial: Historial = new Historial();

  constructor(private historialServices: HistorialService, private router: Router) { }

  ngOnInit(): void {

  }

  //Lo que usaremos en el HTML
  onSubmit() {
    this.guardarHistorialMedico();
    console.log(this.historial);
  }

  guardarHistorialMedico() {
    this.historialServices.registarHitorial(this.historial).subscribe(datos => {
      console.log(datos);
      this.irListaHistorial();

    })
  }

  irListaHistorial() {
    this.router.navigate(['/historial']);
  }


}
