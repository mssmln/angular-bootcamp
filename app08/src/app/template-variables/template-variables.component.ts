import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {

  n = 11;
  persone: Persona[];

  @ViewChild('display') display!: ElementRef; // siamo sicuri che esista nel html con il !

  constructor() {
    this.persone=[ 
      new Persona('max','croci'),
      new Persona('gio','rip')
  
    ];
   }

  ngOnInit(): void {
  }

  prendiColore(colore:any):void{
    console.log(colore.value);
    alert('il tuo colore è' + colore.value);
  }

  inserisci(n:any,c:any):void {
    this.persone.push(new Persona(n.value,c.value));
    n.value='';
    c.value='';
  }

  elimina(indice:number):void{
    if(confirm('sei sicuro di eliminare ' + this.persone[indice].nome + "?")) {
      // aggiorno il display 
      this.display.nativeElement.innerHTML += "eliminato " + this.persone[indice].nome + "<br>";

      this.persone.splice(indice,1);
    }
  }

}
