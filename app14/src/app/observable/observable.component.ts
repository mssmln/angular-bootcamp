import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of, range, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  // memorizzo la sottoscrizione di alcuni esempi
  sottoscrizione3!: Subscription;
  sottoscrizione5!: Subscription;
  // observable dell'evento click sulla pagina
  observable5 = fromEvent(document, 'click');



  constructor() { }

  ngOnInit(): void {
  }

  esempio1(): void {
    console.clear();
    console.log("______ Esempio 1 ______");
    // definisco observable che emette una sequenza di numeri
    const observable = of(10, 20, 30, 40, 50);

    // insieme di funzioni chiamate dall'observer:
    // viene chiamata ad ogni emissione dei dati
    function next(x: any) {
      console.log("valore emesso: " + x)
    }
    // viene chiamata in caso di errori
    function error(e: any) {
      console.log("si è verificato un errore: " + e)
    }
    // viene chiamata al termine del flusso
    function complete() {
      console.log("Sequenza terminata")
    }

    // dichiaro osservatore dell'observable
    // l'observer possiede le fn callback da chiamare in ogni caso
    const observer = { next, error, complete };

    // facciamo partire la sottoscrizione
    console.log("Prima della sottoscrizione");
    observable.subscribe(observer);
    console.log("Dopo la sottoscrizione");

    console.log();
  }

  esempio2(): void {
    console.clear();
    console.log("______ Esempio 2 ______");

    const observable = of(4, 7, 2, 0, 10);

    // dichiaro un observer che dichiara a sua volta le fn
    // al suo interno

    const observer = {
      next: (x: any) => console.log("valore emesso: " + x),
      error: (e: any) => console.log("si è verificato un errore: " + e),
      complete: () => console.log("Sequenza terminata")
    };

    // facciamo partire la sottoscrizione
    console.log("Prima della sottoscrizione");
    observable.subscribe(observer);
    console.log("Dopo la sottoscrizione");

    // modifico una delle fn dell'observer
    observer.next = (x: any) => {
      if (x != 0) { // posso dividere solo se x diverso da zero
        let risultato = 10 / x;
        console.log("10 diviso " + x + ": " + risultato)
      } else {
        throw new Error("Non puoi dividere per zero!");
      }
    };
    /*
        console.log("Prima della sottoscrizione");
        observable.subscribe(observer);
        console.log("Dopo la sottoscrizione");
    */

    // provo a sottoscrivere senza passare un observer
    console.log("Prima della sottoscrizione");
    observable.subscribe();
    console.log("Dopo la sottoscrizione");


    // definisco un observer all'atto della sottoscrizione
    console.log("Prima della sottoscrizione");
    observable.subscribe(
      x => console.log(x * 2),
      y => console.log("errore!"),
      () => console.log("fine sequenza")
    );
    console.log("Dopo la sottoscrizione");
  }

  esempio3(x: number): void {
    if (x == 0) {
      console.clear();
      console.log("______ Esempio 3 ______");

      // observable a tempo (numero progressivo ogni secondo)
      const observable = interval(1000);
      console.log("Prima della sottoscrizione");

      this.sottoscrizione3 = observable.subscribe(
        n => console.log("numero " + n)
      );
      console.log("Dopo la sottoscrizione");
    } else {
      this.sottoscrizione3.unsubscribe();
      console.log("Sottoscrizione 3 terminata");
    }
  }

  esempio4(): void {
    console.clear();
    console.log("______ Esempio 4 ______");

    // dichiaro array
    const colori = [
      "giallo", "verde", "nero", "rosso", "bianco", "blu"
    ];

    // genero un obs da un array
    const observable = from(colori);

    console.log("Prima della sottoscrizione");
    observable.subscribe(
      x => console.log(x.charAt(0) + " come " + x)
    );
    console.log("Dopo la sottoscrizione");
  }

  esempio5(n: number): void {
    console.clear();
    console.log("______ Esempio 5 ______");

    if (n == 0) {
      // sottoscrivo
      this.sottoscrizione5 = this.observable5.subscribe(
        x => console.log("hai cliccato!")
      );
    } else {
      // annullo sottoscrizione
      this.sottoscrizione5.unsubscribe();
    }
  }

  esempio6(): void {
    console.clear();
    console.log("______ Esempio 6 ______");

    // range genera una sequenza di numeri nell'intervallo specificato
    const observable = range(1, 10);

    console.log("Prima della sottoscrizione");
    observable.subscribe(
      x => console.log(x)
    );
    console.log("Dopo la sottoscrizione");

  }


















}