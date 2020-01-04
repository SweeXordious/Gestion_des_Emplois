import { Component, OnInit } from '@angular/core';
import { DispoService } from '../dispo/dispo.service';

@Component({
  selector: 'app-all-dispo',
  templateUrl: './all-dispo.component.html',
  styleUrls: ['./all-dispo.component.scss']
})
export class AllDispoComponent implements OnInit {

  constructor(private dispoService: DispoService) { }

  ngOnInit() {
  }

}
