import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scelta',
  templateUrl: './scelta.component.html',
  styleUrls: ['./scelta.component.css']
})
export class SceltaComponent implements OnInit {
  visibile: boolean = true;
  n: number = 2;
  mostraComp: boolean = true;

  p: any = { // se metti = null non verrà mostrato nel dom
    nome: 'max',
    cog: 'cr'
  };

  col: string = "bianco";

  constructor() { }

  ngOnInit(): void {
  }

}
