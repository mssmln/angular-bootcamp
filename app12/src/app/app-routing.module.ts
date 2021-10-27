import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColonneComponent } from './argomenti/colonne/colonne.component';
import { ContainerComponent } from './argomenti/container/container.component';

const routes: Routes = [
  {path:'container', component: ContainerComponent},
  {path:'colonne', component: ColonneComponent},
  {path:'', redirectTo: 'container', pathMatch: 'full'},
  {path:'**', redirectTo: 'container', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
