import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {

  n = 5;
  persone: Persona[];

  constructor() {
    this.persone=[ 
      new Persona('max','croci'),
      new Persona('gio','rip')
  
    ];
   }

  ngOnInit(): void {
  }

  prendiColore(colore:any):void{
    alert('il tuo colore è' + colore.value);
  }

  inserisci(n:any,c:any):void {
    this.persone.push(new Persona(n.value,c.value));
    n.value='';
    c.value='';
  }

  elimina(indice:number):void{
    if(confirm('sei sicuro di eliminare ' + this.persone[indice].nome + "?")) this.persone.splice(indice,1);

  }

}
