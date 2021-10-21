export class Orologio {
    constructor(public ore: number, public minuti: number) {} // equivale a dichiararli in private sopra il costruttore e poi nel costruttore fare this.attributo = _attributoprivato, è una dichiarazione semplificata
    vediOrario(): string {
        // metodo che restituisce il time hh:mm
        let oreStringa: string = this.ore+''; // il +'' lo rende una stringa
        let minutiStringa: string = this.minuti+''; 
        if(oreStringa.length < 2)
            oreStringa = '0'+oreStringa;
        if(minutiStringa.length < 2)
            minutiStringa = '0'+minutiStringa;
        return oreStringa + minutiStringa;
    }

}
