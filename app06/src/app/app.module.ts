import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestClassiComponent } from './test-classi/test-classi.component';
import { TestInterfacceComponent } from './test-interfacce/test-interfacce.component';

@NgModule({
  declarations: [
    AppComponent,
    TestClassiComponent,
    TestInterfacceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
