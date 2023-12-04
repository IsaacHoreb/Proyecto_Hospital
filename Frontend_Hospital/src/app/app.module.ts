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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActualizarMedicoComponent } from './actualizar-medico/actualizar-medico.component'; //Para el reloj

@NgModule({
  declarations: [
    AppComponent,
    ListarMedicosComponent,
    RegistarMedicosComponent,
    ActualizarMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Agregamos 
    FormsModule, //Agrega
    NgxMaterialTimepickerModule, //Agregado para el tiempo
    BrowserAnimationsModule //Agregado para el tiempo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
