import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  href: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() !=''){
        this.href = location.path();
      }

    });
  }

  ngOnInit(): void {
  }
}


