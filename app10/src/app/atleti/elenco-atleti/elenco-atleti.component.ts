import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-elenco-atleti',
  templateUrl: './elenco-atleti.component.html',
  styleUrls: ['./elenco-atleti.component.css']
})
export class ElencoAtletiComponent implements OnInit {
  elencoAtl: Atleta[];

  constructor(private as:AtletaService) {
    this.elencoAtl= [];
   }

  ngOnInit(): void {
    // recupero elenco atleti dal servizio
    this.elencoAtl = this.as.getAtleti();
  }

}
