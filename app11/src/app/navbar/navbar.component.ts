import { Component, OnInit } from '@angular/core';
import { Utente } from '../models/utente';
import { UtenteService } from '../services/utente.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private us:UtenteService) { }

  ngOnInit(): void {
  }

  get utente():Utente{ // getter
    return this.us.utente;
  }

  logout():void{
    this.us.logout();
  }

}
