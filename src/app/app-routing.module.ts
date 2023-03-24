import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {InicioComponent} from "./componentes/inicio/inicio.component";
import {EncabezadoComponent} from "./componentes/encabezado/encabezado.component";
import {DimensionesComponent} from "./componentes/dimensiones/dimensiones.component";
import {InformativoComponent} from "./componentes/informativo/informativo.component";
import {PreguntasComponent} from "./componentes/preguntas/preguntas.component";

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },

  {
    path: 'encabezado',
    component: EncabezadoComponent
  },
  {
    path: 'dimensiones',
    component: DimensionesComponent
  },
  {
    path: 'informativo',
    component: InformativoComponent
  },
  {
    path: 'preguntas',
    component: PreguntasComponent
  },

  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  // 503
  imports: [RouterModule.forRoot(routes, { useHash: true }), HttpClientModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
