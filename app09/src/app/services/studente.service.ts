import { Injectable } from '@angular/core';
import { STUDENTI } from '../data/studenti'; // const variable
import { Studente } from '../models/studente'; // interface
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {

  // inietto il service logger dentro il costruttore
  constructor(private ls:LoggerService) { }

  getStudenti(): Studente[] {
    // chiedo al logger di stampare in console
    this.ls.log("studente service: caricato elendo studenti")
    return STUDENTI;
  }
}
