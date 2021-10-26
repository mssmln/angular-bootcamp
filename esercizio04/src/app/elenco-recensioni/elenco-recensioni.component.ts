import { Component, OnInit } from '@angular/core';
import { Recensione } from '../models/recensione';

@Component({
  selector: 'app-elenco-recensioni',
  templateUrl: './elenco-recensioni.component.html',
  styleUrls: ['./elenco-recensioni.component.css']
})
export class ElencoRecensioniComponent implements OnInit {
  recensioni: Recensione[];
  inserimento:boolean;
  modifiche:boolean;
  recensioneAttiva?:Recensione;

  constructor() {
    this.recensioni = [
      new Recensione(1,"max","prodotto",3),
      new Recensione(2,"gio","ps3",2),
      new Recensione(3,"gian","ps5",6)
    ];
    this.inserimento= false;
    this.modifiche=false;
   }

  ngOnInit(): void {
  }

  attivaInserimento(): void {
    this.inserimento = !this.inserimento;

  }

  attivaModifiche(): void{
    this.modifiche= !this.modifiche;
  }

  inserisci(c:any,a:any,t:any,p:any):void{
    let nuovaRec = new Recensione(c.value,a.value,t.value,p.value);
    this.recensioni.push(nuovaRec);
    c.value=0;
    a.value='';
    t.value='';
    p.value=0;
    this.inserimento=false;
  }


  modifica(r:Recensione): void{
    this.recensioneAttiva = r;
  }

  conferma(codice:any,autore:any,testo:any,punteggio:any):void{
    this.recensioneAttiva!.codice = codice.value;
    this.recensioneAttiva!.autore = autore.value;
    this.recensioneAttiva!.testo = testo.value;
    this.recensioneAttiva!.punteggio = punteggio.value;

    codice.value=0;
    autore.value='';
    testo.value='';
    punteggio.value=0;

    this.recensioneAttiva = undefined;
  }

  annulla():void{
    this.recensioneAttiva= undefined;
  }

}
