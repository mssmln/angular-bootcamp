import { Component, OnInit } from '@angular/core';
import { Studente } from '../models/studente';
import { LoggerService } from '../services/logger.service';
import { StudenteService } from '../services/studente.service';

@Component({
  selector: 'app-scuola',
  templateUrl: './scuola.component.html',
  styleUrls: ['./scuola.component.css']
})
export class ScuolaComponent implements OnInit {
  studenti:Studente[]; // Studente è una interfaccia
  orderMediaAsc:boolean;
  orderMatricolaAsc:boolean;
  orderCogAsc:boolean;

  constructor(private ss:StudenteService, private ls:LoggerService) {
    this.studenti = [];
    this.orderMediaAsc= true;
    this.orderMatricolaAsc= true;
    this.orderCogAsc= true;
  }
  
  ngOnInit(): void {
    // recupero elenco studenti dal servizio
    this.studenti = this.ss.getStudenti();
  }

  sortStudentsByMedia(): void {
    this.ls.log("scuola: studenti ordinati per media " + (this.orderMediaAsc ? "crescente" : "decrescente"));


    // ordina per più bravi
    if(this.orderMediaAsc){
      this.studenti.sort((a,b) => a.media - b.media);
    } else {
      this.studenti.sort((a,b) => b.media - a.media);
    }
    this.orderMediaAsc= !this.orderMediaAsc;

  }

  sortByMatricola(): void {
    this.ls.log("matricola: studenti ordinati per matricola " + (this.orderMatricolaAsc ? "crescente" : "decrescente"));


    if(this.orderMatricolaAsc){
      this.studenti.sort((a,b) => a.matricola - b.matricola)
    } else {
      this.studenti.sort((a,b) => b.matricola - a.matricola);
    }
    this.orderMatricolaAsc= !this.orderMatricolaAsc;
  }

  sortByCogn(): void{
    this.ls.log("cognome: studenti ordinati per cognome " + (this.orderCogAsc ? "crescente" : "decrescente"));


    if(this.orderCogAsc){
      this.studenti.sort((a,b) => { // usiamo sort perchè studenti è un oggetto
        if(a.cog > b.cog) { // see compare strings js on the web
          return 1;
        } else if (a.cog < b.cog) {
          return -1;
        } else {
          return 0; 
        }
      });
    } else {
      this.studenti.sort((a,b) => {
        if(a.cog < b.cog) {
          return 1;
        } else if (a.cog > b.cog) {
          return -1;
        } else {
          return 0;
      }

      });
    }
    this.orderCogAsc = !this.orderCogAsc;

  }



}