import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelle',
  templateUrl: './tabelle.component.html',
  styleUrls: ['./tabelle.component.css']
})
export class TabelleComponent implements OnInit {
  persone = [
    {
      id:1,
      nome:"mario",
      cognome:"rossi"
    },
    {
      id:2,
      nome:"andrea",
      cognome:"verdi"
    },
    {
      id:3,
      nome:"marco",
      cognome:"gialli"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
