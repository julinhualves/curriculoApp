import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HistoricoComponent } from './historico/historico.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { CompetenciaComponent } from './competencias/competencia/competencia.component';
import { CursoComponent } from './curso/curso.component';


import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


@NgModule({
  declarations: [
    AppComponent,
    HistoricoComponent,
    CompetenciasComponent,
    CompetenciaComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
