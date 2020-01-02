import { Component, OnInit, Input } from '@angular/core';
import { EmploiService } from 'src/app/service/emploi.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  @Input() j = 5;
  constructor(private emploiService: EmploiService) {
      this.emploiService.i = this.j;
   }

  ngOnInit() {
  }

}
