import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-ctc',
  templateUrl: './menu-ctc.component.html',
  styleUrls: ['./menu-ctc.component.scss']
})
export class MenuCtcComponent implements OnInit {

  href: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() !=''){
        this.href = location.path();
      }

    });
  }
  ngOnInit() {
  }

}
