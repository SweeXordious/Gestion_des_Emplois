import { Component, OnInit } from '@angular/core';
import { EmploiService } from '../service/emploi.service';

@Component({
  selector: 'app-ctc-notification',
  templateUrl: './ctc-notification.component.html',
  styleUrls: ['./ctc-notification.component.scss']
})
export class CtcNotificationComponent implements OnInit {

  constructor(private emploiService : EmploiService) { }

  ngOnInit() {
  }

}
