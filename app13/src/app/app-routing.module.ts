import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapFormsComponent } from './bootstrap-forms/bootstrap-forms.component';
import { HomeComponent } from './home/home.component';
import { Html5FormsComponent } from './html5-forms/html5-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  {path: 'html5',component: Html5FormsComponent},
  {path: 'bootstrap',component: BootstrapFormsComponent},
  {path: 'template',component: TemplateFormsComponent},
  {path: '',component: HomeComponent,pathMatch: 'full'},
  {path: '**',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
