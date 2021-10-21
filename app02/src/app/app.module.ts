import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { PulsanteComponent } from './shared/pulsante.component';

@NgModule({
  declarations: [
    AppComponent,
    // aggiungi qui i tuoi compnenti
    PulsanteComponent,
    MainComponent,
    ProdottoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
