import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Emploi';
  user : string;

  constructor(private appService : AppService){
    this.user = this.appService.user;
  }

}
