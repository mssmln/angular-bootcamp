import { Component, OnInit } from '@angular/core';
import { NomeService } from './nome.service';

@Component({
  selector: 'app-gestione-nomi',
  templateUrl: './gestione-nomi.component.html',
  styleUrls: ['./gestione-nomi.component.css']
})
export class GestioneNomiComponent implements OnInit {
  nomi:string[];

  // inietto il servizio nel costruttore
  constructor(private ns:NomeService) { // il costruttore dovrebbe solo inizializzare gli attributi della classe
    this.nomi = [];
   }

  ngOnInit(): void {
    this.nomi = this.ns.getNomi(); // recuperiamo i nomi quando il comp è pronto
  }

  inserisci(name:any): void {
    // chiedi al service di aggiungere il nome
    this.ns.addNome(name.value);

    // pulire la casella del nome
    name.value = "";

  }

}
