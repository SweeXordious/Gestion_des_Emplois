import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { EmploiService } from '../service/emploi.service';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  userName : string;
  userPassword : string;
  userFonction : string;
   errone : boolean;

  constructor(private mdDialog: MatDialog,private route: Router, private userService : UserService, private emploiService : EmploiService, private appService : AppService) {
    this.errone = false;
  }

  ngOnInit() {
  }

  login(){

    for (let i = 0; i < this.userService.users.length ; i++) {
      if(this.userName === this.userService.users[i].username && this.userPassword === this.userService.users[i].password){
        this.appService.user = this.userService.users[i].fonction;
        if(this.appService.user === 'dace'){
          this.route.navigate(['/notification']);
        }
        else if(this.appService.user === 'ctc'){
          this.route.navigate(['/notification-ctc']);
        }

        else if(this.appService.user === 'cpf'){
          this.route.navigate(['/notification-cpf']);
        }
        else if(this.appService.user === 'ouijdane'){
          this.route.navigate(['/notification-cpf']);
        }
        else{
          this.errone = true;}
      }
    
  }
}


  
}
