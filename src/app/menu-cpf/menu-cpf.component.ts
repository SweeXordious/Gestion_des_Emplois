import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu-cpf',
  templateUrl: './menu-cpf.component.html',
  styleUrls: ['./menu-cpf.component.scss']
})
export class MenuCpfComponent implements OnInit {

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
