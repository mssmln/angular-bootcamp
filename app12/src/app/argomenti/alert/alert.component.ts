import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  pezzi:number;
  classeAlert:string[];

  constructor() {
    this.pezzi=5;
    this.classeAlert=['alert','alert-success'];
   }

  ngOnInit(): void {
  }

  compra():void{
    if(this.pezzi > 0) this.pezzi--;
    else alert('terminato');

    if(this.pezzi == 0){
      this.classeAlert = ['alert', 'alert-danger'];
    } else if(this.pezzi < 5){
      this.classeAlert = ['alert', 'alert-warning']

    }
  }




}
