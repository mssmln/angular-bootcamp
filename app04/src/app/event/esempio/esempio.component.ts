import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css']
})
export class EsempioComponent implements OnInit {
  display: string = 'clicca sul pulsante';
  contatore: number = 0;
  disabilitato: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.contatore++;
    this.display = 'hai cliccato sul pulsante ' + this.contatore + ' volte';    
  }

  onReset(){
    this.contatore = 0;
    this.display = 'contatore resettato';
  }

  cambioStato(){
    this.disabilitato = !this.disabilitato; // inverto il valore di disabilitato
  }

}
