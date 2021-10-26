import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-dettaglio-atleta',
  templateUrl: './dettaglio-atleta.component.html',
  styleUrls: ['./dettaglio-atleta.component.css']
})
export class DettaglioAtletaComponent implements OnInit {
  atleta:Atleta;

  constructor(private route:ActivatedRoute, private as:AtletaService, private router:Router) {
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

}
