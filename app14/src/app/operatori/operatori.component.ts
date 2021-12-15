import { Component, OnInit } from '@angular/core';
import { from, observable, range } from 'rxjs';
import { map, skip, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operatori',
  templateUrl: './operatori.component.html',
  styleUrls: ['./operatori.component.css']
})
export class OperatoriComponent implements OnInit {
  // dichiaro un array
  utenti = [
    {
      nome: "Lucia",
      cognome: "Neri"
    },
    {
      nome: "Paolo",
      cognome: "Pietruzzi"
    },
    {
      nome: "Rosa",
      cognome: "Verdi"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  esempio1(): void {
    console.clear();
    console.log("______ Esempio 1 ______");

    const observable = range(1, 10);

    /*
prima di sottoscrivere l'observable,
creiamo una sequenza di operazioni concatenate,
chiamata pipe()

All'interno della pipe possiamo elencare vari operatori
per elaborare i dati emessi dall'observable prima del loro
impiego finale
pipe(
  operatore1(),
  operatore2(),
  ...
)

    */

    // map è un operatore di pipe che sostituisce ciascun valore emesso con il valore restituito dalla funzione inserita

    observable.pipe(
      map(
        x => x * 2
      )
    ).subscribe(console.log);
  }


  esempio2(): void {
    console.clear();
    console.log("______ Esempio 2 ______");

    // dichiaro un array
    const mesi = [
      "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno"
    ];

    // creo observable da array
    const observable = from(mesi);

    observable.pipe(
      map(
        // converto ciascun mese in un numero
        // che rappresenta la sua lunghezza
        x => x.length
      )
    ).subscribe(console.log);

    // creo array di numeri vuoto
    const lunghezze: number[] = [];

    observable.pipe(
      map(
        x => x.length
      )
    ).subscribe(
      x => lunghezze.push(x)
    );

    console.log("Contenuto di lunghezze: " + lunghezze);
  }



  esempio3(): void {
    console.clear();
    console.log("______ Esempio 3 ______");

    const observable = from(this.utenti);

    observable.pipe(
      map(
        // converto l'intero oggetto in una stringa
        utente => utente.nome + " " + utente.cognome
      ),
      map(
        // trasformo la stringa cambiandola in maiuscolo
        nominativo => nominativo.toUpperCase()
      )
    ).subscribe(
      x => console.log("valore finale: " + x)
    );
  }


  esempio4(): void {
    console.clear();
    console.log("______ Esempio 4 ______");

    const observable = range(1, 10);
    // tap = funzione che esegue del codice per ciascun elemento, senza alterarne il valore

    observable.pipe(
      tap(
        // stampo il valore originale, prima della trasformazione
        x => console.log("valore originale: " + x + ", verrà convertito in  " + (x * 1.5))
      ),
      map(
        x => x * 1.5
      )
    ).subscribe(
      x => console.log("valore finale: " + x)
    );

  }


  esempio5(): void {
    console.clear();
    console.log("______ Esempio 5 ______");

    const observable = from(this.utenti);

    observable.pipe(
      tap(
        utente => console.log("Utente da processare: " + utente.nome + " " + utente.cognome)
      ),
      map(
        utente => utente.nome
      ),
      tap(
        nome => console.log("Nome da processare: " + nome)
      ),
      map(
        nome => nome.charAt(0)
      )
    ).subscribe(
      x => console.log("valore finale: " + x)
    );

  }


  esempio6(): void {
    console.clear();
    console.log("______ Esempio 6 ______");


    // take(n) prende i primi n valori dell'obs

    const observable = range(1, 100);

    observable.pipe(
      // prendi i primi 10 valori e scarta gli altri
      take(10)
    ).subscribe(
      x => console.log("valore finale: " + x)
    );

  }

  esempio7(): void {
    console.clear();
    console.log("______ Esempio 7 ______");


    // skip(n) salta i primi n valori dell'obs

    const observable = range(1, 100);

    observable.pipe(
      // salta i primi 90 valori e prendi gli altri
      skip(90)
    ).subscribe(
      x => console.log("valore finale: " + x)
    );

  }


  esempio8(): void {
    console.clear();
    console.log("______ Esempio 8 ______");
    const observable = range(1, 100);

    observable.pipe(
      skip(90),
      map(
        x => x * 2
      ),
      take(5)
    ).subscribe(
      x => console.log("valore finale: " + x)
    );

  }





}
