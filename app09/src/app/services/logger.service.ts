import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(msg:string):void {
    let timing = new Date();
    console.log(timing.toLocaleTimeString()+msg);
  }
}
