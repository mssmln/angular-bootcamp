import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  // uso un alias perchè dal padre passo datiLibro
  @Input("datiLibro") libro: Libro;
  @Output() selezionato: EventEmitter<Libro>;

  constructor() {
    this.libro = new Libro(0,'prova','aut prova',1993);
    this.selezionato = new EventEmitter<Libro>();
   }

  ngOnInit(): void {
  }

  onClick(): void {
    //dobbiamo inviare all'esterno il libro selezionato
    this.selezionato.emit(this.libro);
  }

}
