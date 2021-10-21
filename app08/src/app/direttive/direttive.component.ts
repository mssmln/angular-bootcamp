import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrls: ['./direttive.component.css']
})
export class DirettiveComponent implements OnInit {
  stileUno: string = 'color:red; font-size: 30px;';
  coloreUno: string = 'blue';
  nomi: string[];
  stileDue = {
    'color':'green',
    'font-size':'2em',

  };
  classeUno:string = "evidenziato"; // classe dal css
  classeDue: string[] = ['evidenziato','sottolineato'];
  objClassi = {
    'evidenziato': false,
    'sottolineato': true
  };

  constructor() {
    this.nomi = ['marco','luca','giovanni','massimiliano'];
   }

  ngOnInit(): void {
  }

  getStyle(n: string): any {
    if(n.length < 6){
      return {
      'color':'blue'

    };
    
  }
  return {}; // obj vuoto nessuno stile
}

  getClasses(nome:string): any {
    if(nome.length < 6) {
      return {
        'evidenziato':true,
        'sottolineato':true
      };

    }
    return {
      'evidenziato':false,
        'sottolineato':false
    };
  }

  evidenzia(): void{
    this.objClassi.evidenziato = !this.objClassi.evidenziato;
  }

  sottolinea(): void{
    this.objClassi.sottolineato = !this.objClassi.sottolineato;
  }

}
