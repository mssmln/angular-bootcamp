import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatiUtente } from '../models/dati-utente';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  datiModel: DatiUtente;
  dati: DatiUtente;
  submitOk:boolean=false;

  constructor() {
    // dati iniziali del form
    this.datiModel = {
      "nome": "",
      "cognome": "",
      "intviaggi": false,
      "intmusica": false,
      "intcibo": false,
      "laurea": "",
      "esperienza": "",
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


  onSubmit(form:NgForm):void{
    if(form.valid){
      alert('form valido');
      this.submitOk=true;
    } else{
      // alert('non è valido e non verrà inviato');
    }
  }

}
