import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElencoAtletiComponent } from './atleti/elenco-atleti/elenco-atleti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NuovoAtletaComponent } from './atleti/nuovo-atleta/nuovo-atleta.component';
import { RouterModule } from '@angular/router';
import { DettaglioAtletaComponent } from './atleti/dettaglio-atleta/dettaglio-atleta.component';
import { ModificaAtletaComponent } from './atleti/modifica-atleta/modifica-atleta.component';

@NgModule({
  declarations: [
    AppComponent,
    ElencoAtletiComponent,
    NavbarComponent,
    NuovoAtletaComponent,
    DettaglioAtletaComponent,
    ModificaAtletaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'atleti', component: ElencoAtletiComponent},
      {path: 'atleti/nuovo', component: NuovoAtletaComponent},
      {path: 'atleti/:id', component: DettaglioAtletaComponent},
      {path: 'atleti/:id/modifica', component: ModificaAtletaComponent},
      {path: '', redirectTo: 'atleti', pathMatch: 'full'}, // cosa succede se l'utente non digita nulla
      {path: '**', redirectTo: 'atleti', pathMatch: 'full'} // cosa succede se l'utente digita cavolate nel uri
    ]) // usato per il routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
