import { Component, OnInit } from '@angular/core';
import { DatiUtente } from '../models/dati-utente';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  datiModel: DatiUtente;
  dati: DatiUtente;

  constructor() {
    // dati iniziali del form
    this.datiModel = {
      "nome": "pippo",
      "cognome": "pluto",
      "intviaggi": false,
      "intmusica": false,
      "intcibo": false,
      "laurea": "no",
      "esperienza": "junior",
      "commenti": ""
    };
    // dati che l'utente ha modificato nel form

    // metodo 1
    // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
    // It returns the modified target object.
    // this.dati = Object.assign({}, this.datiModel);

    // metodo 2 con spread operator
    this.dati = { ...this.datiModel };
  }

  ngOnInit(): void {
  }

}
