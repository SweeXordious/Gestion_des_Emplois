import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-div-dashboard',
  templateUrl: './div-dashboard.component.html',
  styleUrls: ['./div-dashboard.component.scss']
})
export class DivDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() year : String

  
}
