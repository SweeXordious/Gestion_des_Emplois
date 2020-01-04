import { Component, OnInit } from '@angular/core';
import { EmploiService } from '../service/emploi.service';

@Component({
  selector: 'app-notification-cpf',
  templateUrl: './notification-cpf.component.html',
  styleUrls: ['./notification-cpf.component.scss']
})
export class NotificationCpfComponent implements OnInit {

  showEmploi : boolean = false;
  constructor(private emploiService: EmploiService) { }

  ngOnInit() {

  }

  getShow(){
    if(this.showEmploi === false){
      return 'Afficher';
    }
    else{
      return 'Cacher';
    }
  }

  active(){
    if(this.showEmploi === false){
      this.showEmploi = true;
    }
    else{
      this.showEmploi = false;
    }
  }



}
