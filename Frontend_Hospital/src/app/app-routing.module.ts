import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { RegistarMedicosComponent } from './registar-medicos/registar-medicos.component';
import { ActualizarMedicoComponent } from './actualizar-medico/actualizar-medico.component';
import { DetallesMedicosComponent } from './detalles-medicos/detalles-medicos.component';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { RegistarPacientesComponent } from './registar-pacientes/registar-pacientes.component';
import { ActualizarPacientesComponent } from './actualizar-pacientes/actualizar-pacientes.component';

//Ingresamos lo sig para el añadido del URL
const routes: Routes = [
  { path: 'medicos', component: ListarMedicosComponent },
  { path: '', redirectTo: 'medicos', pathMatch: 'full' },
  { path: 'registrarMedicos', component: RegistarMedicosComponent },
  { path: 'actualizarMedicos/:id', component: ActualizarMedicoComponent },
  { path: 'medicoDetalles/:id', component: DetallesMedicosComponent },
  //Rutas de pacientes
  { path: 'pacientes', component: ListarPacientesComponent },
  { path: 'registarPacientes', component: RegistarPacientesComponent },
  { path: 'actualizarPacientes/:id', component: ActualizarPacientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
