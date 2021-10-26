import { Injectable } from '@angular/core';
import { ATLETI } from '../data/atleti';
import { Atleta } from '../models/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor() { }

  getAtleti():Atleta[]{
    return ATLETI;
  }

  addAtleta(a:Atleta):void{
    ATLETI.push(a);
  }

  getAtletaById(id:number):any{
    let atleta = undefined; // nel caso c'era oppure no

    atleta = ATLETI.find(a => a.id == id);

    return atleta;
  }


  updateAtleta(atleta:Atleta):void{
    // cerco posizione del atleta nel arr
    let p = ATLETI.findIndex(a => a.id == atleta.id);

    // sovrascrivo con atleta preso come parametro
    if(p>=0){ // non può essere minore di zero un indice, è un controllo
      ATLETI[p]=atleta;
    }
  }

  deleteAtlById(id:number):void{
    // cerco posizione del atleta nel arr
    let p = ATLETI.findIndex(a => a.id == id);

    // se esiste lo cancella
    if(p>=0) ATLETI.splice(p,1);

  }
}
