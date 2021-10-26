import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  nome: string;
  prezzo: number;

  constructor() {
    this.nome = "margherita";
    this.prezzo = 6.5;
   }

  ngOnInit(): void {
  }

  vediDati(): void {
    alert('pizza: ' + this.nome + "prezzo " + this.prezzo);
  }

}
