import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-prof',
  templateUrl: './menu-prof.component.html',
  styleUrls: ['./menu-prof.component.scss']
})
export class MenuProfComponent implements OnInit {

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
