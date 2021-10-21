import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css']
})
export class PulsanteComponent implements OnInit { // child component
  @Input() testo: string; // property binding
  @Output() btnClicked: EventEmitter<string>; // event binding

  constructor() {
    this.testo = 'prova';
    this.btnClicked = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  onClick(): void {
    this.btnClicked.emit(this.testo);
  }

  

}
