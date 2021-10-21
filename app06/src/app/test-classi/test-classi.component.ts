import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-test-classi',
  templateUrl: './test-classi.component.html',
  styleUrls: ['./test-classi.component.css']
})
export class TestClassiComponent implements OnInit {
  // istanza di una persona presa dal model
  persona: Persona;

  // arr oggetti di tipo Persona
  elencoPersone: Persona[];

  constructor() {
    this.persona = new Persona('max', 'cr', 3);
    this.elencoPersone = [
      new Persona('maria', 'cr', 33),
      new Persona('gio', 'cr', 44),
      new Persona('ange', 'cr', 55),
      new Persona('giu', 'cr', 22)
    ];
   }

  ngOnInit(): void {
    /*
    // creo istanza di scatola
    const s1 = new Scatola('pietre',3); // variabile istanza
    const s2 = new Scatola('monete');

    // leggo contenuto scatole
    // console.log(s1.get(), s1.getPeso());
    // console.log(s2.get(), s2.getPeso());
    console.log(s1.contenuto);
    console.log(s2.contenuto);
    

    // s1.contenuto = 'foglie';
    // s2.peso = 30; // pratica sconsigliata
    // s1.setContenuto('alberi');
    s1.peso = 3; // con set 
    */
    
  } 

}

// definisco una nuova classe, sconsigliato nello stesso file, crea un nuovo file

class Scatola {
  // attributi
  private _contenuto: string; // _ per evitare omonimia
  private _peso: number;
  // costruttore, blocco di codice avviato quando la classe viene istanziata
  constructor(c: string, p?: number) { // il costruttore è pubblico
    this._contenuto = c;
    this._peso = p || 0;
  }
  // metodi
  // get(): string { // getter
  //   return this.contenuto;
  // }
  get contenuto() {
    return this._contenuto;
  }
  public get peso() { // public prima di get o set è facoltativo
    return this._peso;
  }
  // getPeso(): number {
  //   return this.peso;
  // }
  // setContenuto(c: string): void {
  //   this._contenuto = c;
  // }
  set peso(p: number) { // setter
    if (p >= 0) this._peso = p;
    else console.log('ddd');
  }
}
