import { Component, OnInit } from '@angular/core';
import { Citas } from '../citas';
import { CitasService } from '../citas.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-citas',
  templateUrl: './actualizar-citas.component.html',
  styleUrls: ['./actualizar-citas.component.css']
})
export class ActualizarCitasComponent implements OnInit {

  id: number;
  citas: Citas = new Citas();

  constructor(private citasServices: CitasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.citasServices.obtenerCitasPorId(this.id).subscribe(dato => {
      this.citas = dato;
    }), e => console.log(e);
  }

  onSubmit() {
    this.citasServices.actualizarCitasPorId(this.id, this.citas).subscribe(datos => {
      this.irListaCitas();
    }), e => console.log(e);
  }

  irListaCitas() {
    this.router.navigate(['/citas']);
    swal('Cita Actualizada', `La cita ${this.citas.id} ha sido actualizado con éxito`, 'success')
  }


  stated: string[] = ['CONFIRMADA', 'PENDIENTE', 'CANCELADA'];

  motives: string[] = [
    'Dolor abdominal persistente',
    'Fiebre sin causa aparente',
    'Tos persistente o dificultad respiratoria',
    'Presión arterial alta o síntomas de hipertensión',
    'Dolores de cabeza recurrentes',
    'Lesiones por accidentes o traumatismos',
    'Problemas de visión',
    'Sangrado vaginal anormal',
    'Dolor o molestias en el pecho',
    'Problemas gastrointestinales persistentes',
    'Problemas de la piel como erupciones',
    'Dificultad para dormir',
    'Síntomas neurológicos como mareos',
    'Cambios en los patrones de peso',
    'Dolor en las articulaciones o músculos',
    'Dificultad para tragar',
    'Problemas urinarios',
    'Síntomas de infecciones',
    'Problemas psicológicos como ansiedad',
    'Dolores en la espalda o el cuello',
    'Problemas relacionados con la diabetes',
    'Problemas dentales o bucales severos',
    'Cambios en los hábitos intestinales',
    'Síntomas de enfermedades cardíacas',
    'Embarazo y cuidado prenatal',
  ];


}
