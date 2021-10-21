import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-gestione-libri',
  templateUrl: './gestione-libri.component.html',
  styleUrls: ['./gestione-libri.component.css']
})
export class GestioneLibriComponent implements OnInit {
  libri: Libro[];
  libroSelezionato?: Libro;

  constructor() {
    this.libri = [
      new Libro(1,'manuale angular','max',2001),
      new Libro(2,'manuale python','gio',2021),
      new Libro(3,'manuale react','giu',2004),
      new Libro(4,'manuale c++','gian',2005),
    ];
   }

  ngOnInit(): void {
  }

  recuperaSelezione(libro: Libro): void {
    this.libroSelezionato = libro;
  }

}
