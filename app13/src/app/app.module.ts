import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Html5FormsComponent } from './html5-forms/html5-forms.component';
import { BootstrapFormsComponent } from './bootstrap-forms/bootstrap-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Html5FormsComponent,
    BootstrapFormsComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    ReactiveFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
