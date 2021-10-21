import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona = {
    nome: 'max',
    cog: 'cr',
    anni: 28
  };

  constructor() { }

  ngOnInit(): void {
  }

}
