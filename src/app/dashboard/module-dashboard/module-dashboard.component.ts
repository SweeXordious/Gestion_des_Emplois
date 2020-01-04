import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-module-dashboard',
  templateUrl: './module-dashboard.component.html',
  styleUrls: ['./module-dashboard.component.scss']
})
export class ModuleDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isShow1 = true;
  isShow2 = true;
  isShow3 = true;
 
  group1 :String;
  group2 :String;
  group3 :String;

  @Input() module :string;

  toggleDisplay(g : String) {
    if(g==='GC1, GC2, GI') {
      this.isShow1 = !this.isShow1;
      this.group1= g;
    }
    if(g==='GC3, GC4') {
      this.isShow2 = !this.isShow2;
      this.group2= g;
    }
    if(g==='IHE, IVE, SIG') {
      this.isShow3 = !this.isShow3;
      this.group3= g;
    }
  }
  isDisplay() {
    this.isShow1 = !this.isShow1;
  }

}
