import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { DimensionesComponent } from './componentes/dimensiones/dimensiones.component';
import { InformativoComponent } from './componentes/informativo/informativo.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EncabezadoComponent,
    DimensionesComponent,
    InformativoComponent,
    PreguntasComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatFormFieldModule,
        MatInputModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatDialogModule,
        MatButtonModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
