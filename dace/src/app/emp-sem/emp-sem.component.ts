import { Component, OnInit } from '@angular/core';
import { EmploiService } from '../service/emploi.service';
import { MydbService } from '../mydb.service';

@Component({
  selector: 'app-emp-sem',
  templateUrl: './emp-sem.component.html',
  styleUrls: ['./emp-sem.component.scss']
})
export class EmpSemComponent implements OnInit {

  constructor(public emploiService: EmploiService, private mydb: MydbService) {
    
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


}
