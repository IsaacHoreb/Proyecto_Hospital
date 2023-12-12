import { Component, OnInit } from '@angular/core';
import { Citas } from '../citas';
import { CitasService } from '../citas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-citas',
  templateUrl: './registar-citas.component.html',
  styleUrls: ['./registar-citas.component.css']
})

export class RegistarCitasComponent implements OnInit {

  citas: Citas = new Citas();

  constructor(private citasServices: CitasService, private router: Router) { }

  ngOnInit(): void {

  }

  //Para lo de HTML
  onSubmit() {
    this.guardarCitas();
    //console.log(this.citas);
  }

  //Metodo para guardar
  guardarCitas() {
    this.citasServices.registarCitas(this.citas).subscribe(datos => {
      //console.log(datos);
      this.irListaCitas(); //llamado del metodo
    })
  }

  //Metodo para ir a lista
  irListaCitas() {
    this.router.navigate(['/citas']);
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
