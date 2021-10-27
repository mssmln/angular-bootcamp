import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  utente:Utente;

  constructor(private router:Router) {
    this.utente={
      username: 'ospite',
      password:'123',
      autenticato:false
    };
   }


   autentica(u:string,pwd:string):void{
     // simulo di chiedere al server se esiste un utente con quel nome e password
    if(u=='pippo' && pwd=='pluto'){
      this.utente={
        username: u,
        password: pwd,
        autenticato:true
      };
      alert('utente'+u+'riconosciuto');
      // vai alla pagina pazienti
      this.router.navigateByUrl('pazienti');
    } else {
      alert('utente'+u+'non riconosciuto');
      // vai alla pagina errore
      this.router.navigateByUrl('errore'); //errore non esiste ma rimanda al comp errore

    }
   }


   logout():void{
    this.utente={
      username: 'ospite',
      password:'123',
      autenticato:false
    };
    alert('utente disconnesso');
    this.router.navigateByUrl('login');

   }




}
