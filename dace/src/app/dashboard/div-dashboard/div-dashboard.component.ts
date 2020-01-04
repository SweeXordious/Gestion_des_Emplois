import { Component, OnInit, Input } from '@angular/core';
import { Module } from '../../model/module';
import { ModuleService } from '../../service/module.service';

@Component({
  selector: 'app-div-dashboard',
  templateUrl: './div-dashboard.component.html',
  styleUrls: ['./div-dashboard.component.scss']
})
export class DivDashboardComponent implements OnInit {

  modulesFirstYear : Array <any>;
  modulesSecondYear : Array <any>;
  modulesThirdYear : Array <any>;
  constructor(private moduleService: ModuleService) { }

  ngOnInit() {
    this.moduleService.getYear(1).subscribe(data => {
      this.modulesFirstYear = data;
      } )
      this.moduleService.getYear(2).subscribe(data => {
      this.modulesSecondYear = data;
      } )
      this.moduleService.getYear(3).subscribe(data => {
      this.modulesThirdYear = data;
      } )
  }
 

  
}
