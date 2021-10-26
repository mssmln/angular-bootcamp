import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recensione } from '../models/recensione';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.css']
})
export class RecensioneComponent implements OnInit {
  @Input() recensione:Recensione;
  @Output() modify: EventEmitter<Recensione>;

  constructor() {
    this.recensione = new Recensione(99,"99","blabla",2);
    this.modify = new EventEmitter<Recensione>();
   }

  ngOnInit(): void {
  }

  avvisaModifica():void{
    // emette evento verso il padre passando la recensione cliccata
    this.modify.emit(this.recensione);
  }

}
