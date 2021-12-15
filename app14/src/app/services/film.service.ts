import { Injectable } from '@angular/core';
import { elencoFilm } from '../data/elencoFilm';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getFilms(): Film[] {
    return elencoFilm;
  }
}
