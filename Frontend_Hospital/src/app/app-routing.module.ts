import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { RegistarMedicosComponent } from './registar-medicos/registar-medicos.component';
import { ActualizarMedicoComponent } from './actualizar-medico/actualizar-medico.component';
import { DetallesMedicosComponent } from './detalles-medicos/detalles-medicos.component';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';

//Ingresamos lo sig para el añadido del URL
const routes: Routes = [
  { path: 'medicos', component: ListarMedicosComponent },
  { path: '', redirectTo: 'medicos', pathMatch: 'full' },
  { path: 'registrarMedicos', component: RegistarMedicosComponent },
  { path: 'actualizarMedicos/:id', component: ActualizarMedicoComponent },
  { path: 'medicoDetalles/:id', component: DetallesMedicosComponent },
  //Rutas de pacientes
  { path: 'pacientes', component: ListarPacientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
