import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {
  display: string = 'fai sth sopra il quadrato';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.display = 'hai cliccato sul quadrato';
  }

  onMouseOver() {
    this.display = 'sei entrato';
  }

  onMouseOut() {
    this.display = 'sei uscito';
  }

  onFocus() {
    this.display = 'focus';
  }

  onBlur() {
    this.display = 'blur';
  }

  onInput(event: Event) {
    let elemento: HTMLInputElement = event.target as HTMLInputElement;
    this.display = 'input' + elemento.value;

    elemento.style.backgroundColor = 'blue';
  }

}
