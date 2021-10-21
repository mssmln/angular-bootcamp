import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css']
})
export class EsempioComponent implements OnInit {
  pathImg: string = 'assets/img/foto2.jpg';
  altImg: string = 'viaggi avventura';
  pathLink: string = 'http://www.lastampa.it';
  contenutoP: string = 'hai usato innerHTML';
  bloccato: boolean = true;
  stileTesto: string = 'color: purple; font-size: 1.4em;';
  classeTesto: string = 'evidenziato';

  constructor() { }

  ngOnInit(): void {
  }

}
