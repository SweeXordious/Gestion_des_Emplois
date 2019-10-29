import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-case-emploi',
  templateUrl: './case-emploi.component.html',
  styleUrls: ['./case-emploi.component.scss']
})
export class CaseEmploiComponent implements OnInit {

  @Input() id: number;
  private elements = [
    {
      id: 1,
      name : 'Java',
      seance: '7'
    },
    {
      id: 2,
      name : 'C++',
      seance: '14'
    },
    {
      id: 3,
      name : 'Angular',
      seance: '5'
    }
  ];
  @Input() dispo: boolean = false;
  @Input() nomElement: string;
  @Input() nbrSeance: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  @Input() numSeance: number;
  @Input() nomSalle: string;
  @Input() nomEnseignant: string;




  constructor() {
  }

  ngOnInit() {
  }

  setTable(i: number): number[]{
    let table: number[];
    for(let j=0; j<i;j++){
      table[j] = j;
    }
    return table;
  }

  getDispo(){
    if(this.dispo === true){
      return 'Occupé';
    }
    else if (this.dispo === false){
      return 'Vide';
    }
  }

  getNbrSeance(nom : String){
    if(nom === 'Java'){
      return 7;
    }
    else if(nom === 'C++'){
      return 14;
    }
    else if(nom === 'Angular'){
      return 5;
    }
  }

}
