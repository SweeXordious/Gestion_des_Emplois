import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {



  isActive: boolean = false;


  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  activer(){
    if(this.isActive)
    {
      this.isActive = false;
    }
    else{
      this.isActive = true;
    }

  }

  getUser(){
    return this.appService.user;
  }

}

