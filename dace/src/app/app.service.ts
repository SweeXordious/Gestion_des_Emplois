import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user: string = '';

  constructor(private route : Router) {

   }

  setFonction(){
    if(this.user = 'dace'){
      this.route.navigate(['/notification']);
    }
    else if(this.user = 'ctc'){
      this.route.navigate(['/notification-ctc']);
    }
    else if(this.user = 'cpf'){
      this.route.navigate(['/notification-cpf']);
    }
    else{
      this.route.navigate(['/notification']);
    }
  }
  

}
