import { Injectable } from "@angular/core";
import { NOMI } from "../data/nomi"; // nostro file con i nomi

@Injectable({providedIn: "root"})
export class NomeService {
    getNomi():string[] {
        return NOMI; // unica istanza del arr nomi
    }
    addNome(n:string):void {
        NOMI.push(n);

    }
}