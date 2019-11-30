import { Injectable, Input, OnInit, EventEmitter } from '@angular/core';
import { Module } from '../module';
import { MydbService } from '../mydb.service';
import { Subscription } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmploiService implements OnInit{

  @Input() year: string = '1ere année';
  modules: Module[];
  grp: string = 'GI';
  i:number = 0;
  emploi = [
    {
      id : 0,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 1,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 2,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 3,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 4,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 5,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 6,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 7,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 8,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 9,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 10,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 11,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 12,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 13,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 14,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 15,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 16,
      mmodule : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 17,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 18,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 19,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 20,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 21,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 22,
      module : '',
      element: '',
      nbSeance: 0
    },
    {
      id : 23,
      module : '',
      element: '',
      nbSeance: 0
    }
  ] ;

  isSend : boolean = false;
  isValid : boolean = false;

  constructor(private myDb : MydbService) { }

  findCaseById(id: number){
    const caseEmploi = this.emploi.find(
      (s) => {
        return s.id === id;
      }
    );
    return caseEmploi;
  }


  saveEmploi(){
    this.isSend = true;
  }

  validEmploi(){
    if(confirm('Valider l\'emploi commun du group ' + this.grp + '?')){
      this.isValid = true;
    }
      
  }

  ngOnInit(){

  }
}