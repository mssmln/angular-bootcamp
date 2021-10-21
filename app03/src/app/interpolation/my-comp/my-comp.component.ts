import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  name?: string = 'max'; // col ? può non avere un valore perchè è opzionale
  prezzo: number = 1200;
  nPezzi: number = 5;
  surname: string = 'rossi';
  today: Date = new Date();
  link: string = 'http://www.google.it';
  img: string = 'assets/img/ps5.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
