import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterazione',
  templateUrl: './iterazione.component.html',
  styleUrls: ['./iterazione.component.css']
})
export class IterazioneComponent implements OnInit {
  col: string[] = ['giallo','azzurro','rosso'];

  p = [
    {
      n: 'max',
      cog: 'cr'
    },
    {
      n: 'ma',
      cog: 'p'
    },
    {
      n: 'jan',
      cog: 'cr'
    },
    {
      n: 'fede',
      cog: 'cr'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
