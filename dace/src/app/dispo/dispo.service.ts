import { Injectable, OnInit } from '@angular/core';
import { UserModule } from '../service/user/user.module';
import { EmploiService } from '../service/emploi.service';

@Injectable({
  providedIn: 'root'
})
export class DispoService implements OnInit {

  dispoTable:{ id: number, professeur: string, option : number, annee: number, element: string, jour: number, jourPart: number}[] = [
  ];



  

  constructor(private emploiService: EmploiService) { }


  ngOnInit(){

  }

  addDispo(jour: number, jourPart: number, classe: number, element: string, annee: number){
    const dispoObject = {
      id : 0,
      jour : 1,
      jourPart : 0,
      professeur : 'Hamid lbldi',
      option: 5,
      annee : 2,
      element: 'elemennt'
    };
    dispoObject.jour = jour;
    dispoObject.jourPart = jourPart;
    dispoObject.annee = annee;
    dispoObject.element = element;
    dispoObject.option = classe;
    dispoObject.id = this.dispoTable.length + 1 ;
    this.dispoTable.push(dispoObject);
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
        return 'shit';
    }
  }

}
