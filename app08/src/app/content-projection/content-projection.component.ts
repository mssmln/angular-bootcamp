import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {
  elenco:string[];
  prodotti:any[];

  constructor() {
    this.elenco = [
      'aggiungi','rimuovi','chiudi','apri'
    ];

    this.prodotti = [
      {
        nome:'pianta',
        descrizione:'tipo carnivoro',
        prezzo: 34.9
      },
      {
        nome:'fungo',
        descrizione:'tipo tossico',
        prezzo: 90
      }
    ];
   }

  ngOnInit(): void {
  }

}
