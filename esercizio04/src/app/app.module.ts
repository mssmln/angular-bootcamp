import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElencoRecensioniComponent } from './elenco-recensioni/elenco-recensioni.component';
import { RecensioneComponent } from './recensione/recensione.component';

@NgModule({
  declarations: [
    AppComponent,
    ElencoRecensioniComponent,
    RecensioneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
