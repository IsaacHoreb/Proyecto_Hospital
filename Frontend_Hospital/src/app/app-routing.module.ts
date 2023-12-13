import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { RegistarMedicosComponent } from './registar-medicos/registar-medicos.component';
import { ActualizarMedicoComponent } from './actualizar-medico/actualizar-medico.component';
import { DetallesMedicosComponent } from './detalles-medicos/detalles-medicos.component';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { RegistarPacientesComponent } from './registar-pacientes/registar-pacientes.component';
import { ActualizarPacientesComponent } from './actualizar-pacientes/actualizar-pacientes.component';
import { DetallesPacientesComponent } from './detalles-pacientes/detalles-pacientes.component';
import { ListarHistorialComponent } from './listar-historial/listar-historial.component';
import { RegistarHistorialComponent } from './registar-historial/registar-historial.component';
import { ActualizarHistorialComponent } from './actualizar-historial/actualizar-historial.component';
import { DetallesHistorialComponent } from './detalles-historial/detalles-historial.component';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { RegistarCitasComponent } from './registar-citas/registar-citas.component';
import { ActualizarCitasComponent } from './actualizar-citas/actualizar-citas.component';
import { DetallesCitasComponent } from './detalles-citas/detalles-citas.component';
import { ListarDepartamentosComponent } from './listar-departamentos/listar-departamentos.component';
import { RegistrarDepartamentosComponent } from './registrar-departamentos/registrar-departamentos.component';
import { ActualizarDepartamentosComponent } from './actualizar-departamentos/actualizar-departamentos.component';
import { DetallesDepartamentosComponent } from './detalles-departamentos/detalles-departamentos.component';

//Ingresamos lo sig para el añadido del URL
const routes: Routes = [
  //Rutas de Medicos
  { path: 'medicos', component: ListarMedicosComponent },
  { path: '', redirectTo: 'medicos', pathMatch: 'full' },
  { path: 'registrarMedicos', component: RegistarMedicosComponent },
  { path: 'actualizarMedicos/:id', component: ActualizarMedicoComponent },
  { path: 'medicoDetalles/:id', component: DetallesMedicosComponent },
  //Rutas de Pacientes
  { path: 'pacientes', component: ListarPacientesComponent },
  { path: 'registrarPacientes', component: RegistarPacientesComponent },
  { path: 'actualizarPacientes/:id', component: ActualizarPacientesComponent },
  { path: 'pacienteDetalles/:id', component: DetallesPacientesComponent },
  //Rutas de Historial
  { path: 'historial', component: ListarHistorialComponent },
  { path: 'registrarHistorial', component: RegistarHistorialComponent },
  { path: 'actualizarHistorial/:id', component: ActualizarHistorialComponent },
  { path: 'historialDetalles/:id', component: DetallesHistorialComponent },
  //Rutas de Citas
  { path: 'citas', component: ListarCitasComponent },
  { path: 'registrarCitas', component: RegistarCitasComponent },
  { path: 'actualizarCitas/:id', component: ActualizarCitasComponent },
  { path: 'citasDetalles/:id', component: DetallesCitasComponent },
  //Rutas del Departamentos
  { path: 'departamentos', component: ListarDepartamentosComponent },
  { path: 'registrarDepartamentos', component: RegistrarDepartamentosComponent },
  { path: 'actualizarDepartamento/:id', component: ActualizarDepartamentosComponent },
  { path: 'departamentoDetalles/:id', component: DetallesDepartamentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
