import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EsempioComponent } from './event/esempio/esempio.component';
import { ElencoComponent } from './event/elenco/elenco.component';
import { PersonaComponent } from './two-way/persona/persona.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EsempioComponent,
    ElencoComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
