import { Component, OnInit, Input } from '@angular/core';
import { EmploiService } from 'src/app/service/emploi.service';

@Component({
  selector: 'app-emp-sem-case',
  templateUrl: './emp-sem-case.component.html',
  styleUrls: ['./emp-sem-case.component.scss']
})
export class EmpSemCaseComponent implements OnInit {

  @Input() j : number = 5;
  constructor(public emploiService : EmploiService) { 
    this.emploiService.i = this.j;
  }

  ngOnInit() {
  }

}
