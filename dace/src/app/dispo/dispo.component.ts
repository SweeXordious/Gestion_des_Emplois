import { Component, OnInit } from '@angular/core';
import { DispoService } from './dispo.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';
import { EmploiService } from '../service/emploi.service';
import { AppService } from '../app.service';
import { LIVE_ANNOUNCER_PROVIDER } from '@angular/cdk/a11y';
import { MydbService } from '../mydb.service';

@Component({
  selector: 'app-dispo',
  templateUrl: './dispo.component.html',
  styleUrls: ['./dispo.component.scss']
})
export class DispoComponent implements OnInit {
  
  user : string;

  constructor(private dispoService: DispoService, 
    private mydb : MydbService,
    private emploiService: EmploiService, 
    private appService: AppService) {
      this.user = this.appService.user;
   }

  ngOnInit() {
    if(this.emploiService.year === '1ere année'){
      this.mydb.findFirstYear().subscribe(data => {
        this.emploiService.modules = data;
        })
      this.mydb.findAllElement().subscribe(data =>{
        this.emploiService.elements = data;
      }
        )
    }
    else if(this.emploiService.year === '2eme année'){
      this.mydb.findSecondYear().subscribe(data => {
        this.emploiService.modules = data;
        })
    } 
    else{
      this.mydb.findThirdYear().subscribe(data => {
        this.emploiService.modules = data;
        })
    }
  }


  onSubmit(form: NgForm){
    console.log(form.value);
    const jour = form.value['jour'];
    const jourPart = form.value['jourPart'];
    const annee = form.value['annee'];
    const classe = form.value['classe'];
    const element = form.value['element'];

    this.dispoService.addDispo(jour,jourPart,classe,element,annee);
  }

  getDay(i: any){
    switch(i){
      case "0":
        return 'lundi';
      case "1":
        return 'mardi';
      case "2":
        return 'mercredi';
      case "3":
        return 'jeudi';
      case "4":
        return 'vendredi';
      case "5":
        return 'samedi';
      default:
        return 'null';
    }
  }

  getYear(i : any){
    switch(i){
      case '0':
        return '1ére année';
      case '1':
        return '2éme année';
      case '2':
        return '3éme année';
    }
  }

  getPart(i: any){
    switch(i){
      case '0':
        return 'Matin';
      case '1':
        return 'Aprés Midi';
    }
  }

  getClasse(i : any){
    switch(i){
      case '0':
        return 'GI';
      case '1':
        return 'GC';
      case '2':
        return 'IVE';
      case '3':
        return 'IHE';
      case '4':
        return 'METEO';
      case '5':
        return 'SIG';
      case '6': 
        return 'GE';
      default:
        return null;
    }
  }

}
