import { Component, OnInit } from '@angular/core';
import { Orologio } from './orologio';

@Component({
  selector: 'app-gestione-orologi',
  templateUrl: './gestione-orologi.component.html',
  styleUrls: ['./gestione-orologi.component.css']
})
export class GestioneOrologiComponent implements OnInit {
  // elenco orologi
  elencoOrologi: Orologio[];

  constructor() {
    this.elencoOrologi = [
      new Orologio(9,35),
      new Orologio(11,0),
      new Orologio(23,50)

    ];
   }

  ngOnInit(): void {
  }

  aumenta(orologio: Orologio): void {
    orologio.minuti += 5;
    if(orologio.minuti == 60) {
      orologio.minuti = 0;
      orologio.ore++;
    }
  }

}
