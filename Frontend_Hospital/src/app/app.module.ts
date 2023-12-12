import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';

//Importes de archivos 
import { HttpClientModule } from '@angular/common/http';
import { RegistarMedicosComponent } from './registar-medicos/registar-medicos.component';
import { FormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'; //Para el reloj
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Para el reloj
import { ActualizarMedicoComponent } from './actualizar-medico/actualizar-medico.component'; 
import { ReactiveFormsModule } from '@angular/forms';
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
@NgModule({
  declarations: [
    AppComponent,
    ListarMedicosComponent,
    RegistarMedicosComponent,
    ActualizarMedicoComponent,
    DetallesMedicosComponent,
    ListarPacientesComponent,
    RegistarPacientesComponent,
    ActualizarPacientesComponent,
    DetallesPacientesComponent,
    ListarHistorialComponent,
    RegistarHistorialComponent,
    ActualizarHistorialComponent,
    DetallesHistorialComponent,
    ListarCitasComponent,
    RegistarCitasComponent,
    ActualizarCitasComponent,
    DetallesCitasComponent,
    ListarDepartamentosComponent,
    RegistrarDepartamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Agregamos 
    FormsModule, //Agrega
    NgxMaterialTimepickerModule, //Agregado para el tiempo
    BrowserAnimationsModule, //Agregado para el tiempo
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
