import { Component, OnInit, DoCheck } from '@angular/core';
import { MydbService } from '../mydb.service';
import { Module } from '../module';
import { EmploiService } from '../service/emploi.service';
import { CaseEmploiComponent } from '../case-emploi/case-emploi.component';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.scss']
})
export class EmploiComponent implements OnInit{

  SelectedClass : string;

  classes = ['GC1 & GC2', 'GC3 & GC4', 'IHE & IVE', 'GE1 & GE2','SIG & METEO', 'GI'];
  annees = ['1ere année', '2eme année', '3eme année'];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  modules : Module[];



  constructor(private mydb : MydbService, private emploiService : EmploiService) {
  }


  ngOnInit() {
    if(this.emploiService.year === '1ere année'){
      this.mydb.findFirstYear().subscribe(data => {
        this.emploiService.modules = data;
        })
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

  update(){
    this.ngOnInit();
  }

  save(){
    if(confirm('Envoyer l\'emploi ?'))
    this.emploiService.saveEmploi();
  }


}
