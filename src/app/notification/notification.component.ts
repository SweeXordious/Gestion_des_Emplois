import { Component, OnInit } from '@angular/core';
import { EmploiService } from '../service/emploi.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  showEmploi : boolean = false;

  constructor( private emploiService: EmploiService) { }


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

  getModule(i : number){
    return this.emploiService.emploi[i].module
    + "<br>"
    + this.emploiService.emploi[i].element
    + "<br>"
    + this.emploiService.emploi[i].nbSeance;
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
