import { Component } from "@angular/core";



@Component({
    selector: 'main-comp',
    template: `<main>
    <h2>{{titoloMain}}</h2>
    <p>{{testoMain}}</p>
    <pulsante></pulsante>
    </main>`,
    // css
    styles: [
        `
        main {
            background-color: lightgrey;
            border: 2px solid black;
            padding: 0 2%;
        }
        h2 {
            text-transform: uppercase;
        }
        p {
            white-space: pre-wrap; 
        }
        `
    ]
})

// white-space works with the usage of \n

export class MainComponent {
    titoloMain: string = "ristorante da Andrea";
    testoMain: string = "testo del main loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm\nmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"

}