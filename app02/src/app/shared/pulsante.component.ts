import { Component } from "@angular/core";


@Component({
    // non bisogna usare nomi di tag html esistenti
    selector: 'pulsante',
    template: '<button>{{label}}</button>'
})

// creare una classe ts
export class PulsanteComponent {
    // creaiamo degli attributi
    label: string = "cliccami";
}