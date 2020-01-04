import { Component, OnInit, Input } from '@angular/core';
import { EmploiService } from '../service/emploi.service';
import { MydbService } from '../mydb.service';

@Component({
  selector: 'app-case-emploi-cpf',
  templateUrl: './case-emploi-cpf.component.html',
  styleUrls: ['./case-emploi-cpf.component.scss']
})
export class CaseEmploiCpfComponent implements OnInit {

  @Input() dispo : boolean = false;
  @Input() i : number;
  constructor(private emploiService: EmploiService, private mydb : MydbService) {
    //this.emploiService.i = this.i;
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

  getDispo(){
    if(this.dispo === true){
      return 'Occupé';
    }
    else if (this.dispo === false){
      return 'Vide';
    }
  }

}
