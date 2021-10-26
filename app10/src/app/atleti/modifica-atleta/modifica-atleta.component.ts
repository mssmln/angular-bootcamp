import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-modifica-atleta',
  templateUrl: './modifica-atleta.component.html',
  styleUrls: ['./modifica-atleta.component.css']
})
export class ModificaAtletaComponent implements OnInit {
  atleta:Atleta;

  constructor(private route:ActivatedRoute,private as:AtletaService,private router:Router) {
    this.atleta= {
      id: 0,
      nome: '',
      cognome: '',
      punteggio: 0
    };
   }

  ngOnInit(): void {
    // estrarre parametro id dalla url (rotta attiva)
    let id:number = Number(this.route.snapshot.paramMap.get('id'));
    // chiedere al servizio l'atleta con quel id 
    let atletaRestituito = this.as.getAtletaById(id);
    // sostituire l'atleta con quello preso dal servizio
    if(atletaRestituito){
      this.atleta=atletaRestituito;
      
    } else {
      alert('non esiste');
      this.router.navigateByUrl("/atleti");
    }
  }


  conferma(n:any,c:any,p:any):void{
    //costruisco obj  dai parametri presi dal form
    let atletaModificato= {
      id: this.atleta.id, // non si deve modificare
      nome: n.value,
      cognome: c.value,
      punteggio: p.value
    };
    // chiede al servizio di sovrascrivere l'atleta
    this.as.updateAtleta(atletaModificato);
    // torna ai dettagli per controllare le modifiche
    this.router.navigateByUrl('/atleti/'+this.atleta.id);
  }


  elimina():void{
    // chiedo al servizio di eliminare l'atleta
    this.as.deleteAtlById(this.atleta.id);
    // vado all'elenco 
    this.router.navigateByUrl('/atleti');

  }

}
