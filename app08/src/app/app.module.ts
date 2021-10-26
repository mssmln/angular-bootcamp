import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirettiveComponent } from './direttive/direttive.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { PulsanteComponent } from './shared/pulsante/pulsante.component';
import { ProdottoComponent } from './shared/prodotto/prodotto.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { PizzaComponent } from './pizza/pizza.component';
import { EsempiPipesComponent } from './esempi-pipes/esempi-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DirettiveComponent,
    ContentProjectionComponent,
    PulsanteComponent,
    ProdottoComponent,
    TemplateVariablesComponent,
    PizzaComponent,
    EsempiPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
