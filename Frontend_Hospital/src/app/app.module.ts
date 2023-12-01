import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarMedicosComponent } from './listar-medicos/listar-medicos.component';

//Importes de archivos 
import { HttpClientModule } from '@angular/common/http';
import { RegistarMedicosComponent } from './registar-medicos/registar-medicos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarMedicosComponent,
    RegistarMedicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Agregamos 
    FormsModule //Agrega
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
