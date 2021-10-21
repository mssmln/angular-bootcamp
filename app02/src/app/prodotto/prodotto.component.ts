import { Component } from "@angular/core";

@Component({
    selector: 'prodotto',
    templateUrl: './prodotto.component.html',
    styleUrls: [
        './prodotto.component.css'
    ]

})


export class ProdottoComponent {
    codice: string = "C034";
    nome: string = "PS5";
    immagine: string = "assets/img/ps5.jpg"; // il path è già mappato non c'è bisogno di salire di cartella
    testoImg: string = "ps5"
    prezzo: number = 399;
}