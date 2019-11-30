import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user: string = '';

  constructor(private route : Router) {

   }

  setDace(){
    this.user = 'dace';
    this.route.navigate(['/notification']);
  }

  setCtc(){
    this.user = 'ctc';
    this.route.navigate(['/dashboard']);
  }

}
