import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';
import { RegistarMedicosComponent } from './registar-medicos/registar-medicos.component';
import { ActualizarMedicoComponent } from './actualizar-medico/actualizar-medico.component';

//Ingresamos lo sig para el añadido del URL
const routes: Routes = [
  { path: 'medicos', component: ListarMedicosComponent },
  { path: '', redirectTo: 'medicos', pathMatch: 'full' },
  { path: 'registrarMedicos', component: RegistarMedicosComponent },
  { path: 'actualizarMedicos/:id', component : ActualizarMedicoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
