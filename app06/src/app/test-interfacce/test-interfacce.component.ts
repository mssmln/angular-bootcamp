import { Component, OnInit } from '@angular/core';
import { Pacco } from '../models/pacco';

@Component({
  selector: 'app-test-interfacce',
  templateUrl: './test-interfacce.component.html',
  styleUrls: ['./test-interfacce.component.css']
})
export class TestInterfacceComponent implements OnInit {
  // dichiaro un pacco
  mioPacco: Pacco;
  pacchi: Pacco[];
  // dichiaro una var per contenute il pacco che seleziono dalla lista
  paccoSelezionato?: Pacco;

  constructor() {
    this.mioPacco = {
      codice: 4,
      contenuto: 'lettere',
      peso: 2
    };
    this.pacchi = [
      {
        codice: 3,
        contenuto: 'maglie',
        peso: 21
      },
      {
        codice: 2,
        contenuto: 'pantaloni',
        peso: 22
      },
      {
        codice: 1,
        contenuto: 'giacche',
        peso: 23
      }

    ]
   }

  ngOnInit(): void {
  }

  selezionato(p: Pacco): void {
    this.paccoSelezionato = p;
  }

  togliSelezionato(): void {
    this.paccoSelezionato = undefined;
  }

}

/*interface Dipendente {
  matricola: number,
  cognome: string,
  nome: string,
  stampaDati(): void
}

class Manager implements Dipendente {
  matricola: number;
  cognome: string;
  nome: string;
  reparto: string;


  constructor(m: number, c: string, n: string, r: string) {
    this.matricola = m;
    this.cognome = c;
    this.nome = n;
    this.reparto = r;
  }


  stampaDati(): void {
  }
  
}*/
