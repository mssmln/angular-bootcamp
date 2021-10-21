import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app08';

  direttive: boolean= false;
  content: boolean= false;
  template:boolean= true;

  mostraDirettiva():void{
    this.direttive = !this.direttive;
  }

  mostraContent():void{
    this.content = !this.content;
  }

  mostraTemplate():void{
    this.template = !this.template;
  }


}
