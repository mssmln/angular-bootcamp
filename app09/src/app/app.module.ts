import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestioneNomiComponent } from './gestione-nomi/gestione-nomi.component';
import { ScuolaComponent } from './scuola/scuola.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneNomiComponent,
    ScuolaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
