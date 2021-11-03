import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent implements OnInit {
  loginForm:FormGroup;
  // inietto una istanza di formbuilder componente in grado di 
  // create dinamicamente istanze di elementi form:
  // formcontrol, formgroup, formarray

  constructor(private fb:FormBuilder) {
    this.loginForm = new FormGroup({});

   }

  ngOnInit(): void {
    // riempio il form group usando il form builder
    // assegnando l'elenco dei campi coi rispettivi valori
    // e i vincoli validazione
    this.loginForm= this.fb.group({
      usename: ['',[Validators.required, this.controlloUsername]], // valore, vincoli di validità
      password: ['',[Validators.required,Validators.minLength(8)]], // se hai più vincoli devi metterli in un array
      email: [''],
      loginemail: [false],
      datiPagamento: [false],
    });
  }


  // funzione che cambia il metodo di login, posso usare anche la mail al posto di username
  cambiaLogin():void{
    if(this.loginForm.controls.loginemail.value){
      // disattiva required su username e attivalo su email
      this.loginForm.controls.username.clearValidators();
      this.loginForm.controls.email.setValidators([Validators.required,Validators.email]);
    } else {
      // attiva required su username e disattivalo su email
      this.loginForm.controls.username.setValidators([Validators.required]);
      this.loginForm.controls.email.clearValidators();
    }
    // aggiorna le politiche di validazione
    this.loginForm.controls.username.updateValueAndValidity();
    this.loginForm.controls.email.updateValueAndValidity();
  }


  // fun di validazione personalizzata
  controlloUsername(elemento: AbstractControl){ // gli passo un elemento qualsiasi del form
    if(elemento.value == 'admin'){ // se usi username riservato
      return {
        'admin':true
      };
    }
    return null; // no errors
  }


  onSubmit():void{
    alert('inviato con successo');

  }

}
