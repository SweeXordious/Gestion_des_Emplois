import { Component, OnInit } from '@angular/core';
import { EmploiService } from '../service/emploi.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

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
