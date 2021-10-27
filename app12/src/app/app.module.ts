import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './argomenti/container/container.component';
import { ColonneComponent } from './argomenti/colonne/colonne.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ColonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
