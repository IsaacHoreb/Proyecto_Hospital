import { Component, OnInit } from '@angular/core';
import { Historial } from '../historial';
import { HistorialService } from '../historial.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-historial',
  templateUrl: './actualizar-historial.component.html',
  styleUrls: ['./actualizar-historial.component.css']
})

export class ActualizarHistorialComponent implements OnInit {

  id: number;
  historial: Historial = new Historial();

  constructor(private historialServices: HistorialService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.historialServices.obtenerHistorialPorId(this.id).subscribe(datos => {
      this.historial = datos;
    }), error => console.log(error);
  }

  onSubmit() {
    this.historialServices.actualizarHistorial(this.id, this.historial).subscribe(datos => {
      this.irListaHistorial();
    }), error => console.log(error);
  }

  irListaHistorial() {
    this.router.navigate(['/historial']);
  }


}
