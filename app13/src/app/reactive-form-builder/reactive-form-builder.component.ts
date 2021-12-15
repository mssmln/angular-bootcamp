import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent implements OnInit {
  loginForm: FormGroup;
  // inietto una istanza di FormBuilder, componente in grado di 
  // creare dinamicamente istanze di elementi form:
  // FormControl, FormGroup, FormArray
  constructor(private fb: FormBuilder) {
    this.loginForm = new FormGroup({});
  }

  ngOnInit(): void {
    // riempio il form group usando il form builder,
    // assegnando l'elenco dei campi con i rispettivi valori ed i 
    // vincoli di validazione
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, this.controlloUsername]], // [valore, vincoli di validità]
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: [''],
      loginemail: [false],
      datiPagamento: [false],

      // se ho più di un vincolo, devo metterli in array
    });
  }

  // funzione che cambia il metodo di login:
  // posso usare anche la mail al posto di username
  cambiaLogin(): void {
    if (this.loginForm.controls.loginemail.value) {
      // disattiva required su username
      this.loginForm.controls.username.clearValidators();
      // attiva required su email
      this.loginForm.controls.email.setValidators([Validators.required, Validators.email]);
    } else {
      // attiva required su username
      this.loginForm.controls.username.setValidators([Validators.required]);
      // disattiva required su email
      this.loginForm.controls.email.clearValidators();
    }
    // aggiorna le politiche di validazione
    this.loginForm.controls.username.updateValueAndValidity();
    this.loginForm.controls.email.updateValueAndValidity();
  }

  // funzione di validazione personalizzata
  controlloUsername(elemento: AbstractControl) { // gli passo un elemento qualsiasi del form
    if (elemento.value == "admin") { // se usi uno username riservato
      return { // se ci sono errori, restituisco l'oggetto col nome dell'errore
        'admin': true
      };
    }
    return null; // non sono presenti errori
  }

  onSubmit(): void {
    alert("Form inviato con successo!");
  }
}
