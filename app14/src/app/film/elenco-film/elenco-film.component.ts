import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-elenco-film',
  templateUrl: './elenco-film.component.html',
  styleUrls: ['./elenco-film.component.css']
})
export class ElencoFilmComponent implements OnInit {
  films: Film[];

  constructor(private fs: FilmService) {
    this.films = [];
  }

  ngOnInit(): void {
    // chiedo elenco film al service
    this.films = this.fs.getFilms();
  }

}
