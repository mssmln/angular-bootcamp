import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElencoFilmComponent } from './film/elenco-film/elenco-film.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { OperatoriComponent } from './operatori/operatori.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path: 'operatori',
    component: OperatoriComponent
  },
  {
    path: 'film',
    component: ElencoFilmComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
