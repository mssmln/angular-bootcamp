import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestioneOrologiComponent } from './gestione-orologi/gestione-orologi.component';
import { GestionePulsantiComponent } from './gestione-pulsanti/gestione-pulsanti.component';
import { PulsanteComponent } from './gestione-pulsanti/pulsante/pulsante.component';
import { GestioneLibriComponent } from './gestione-libri/gestione-libri.component';
import { LibroComponent } from './gestione-libri/libro/libro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GestioneOrologiComponent,
    GestionePulsantiComponent,
    PulsanteComponent,
    GestioneLibriComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
