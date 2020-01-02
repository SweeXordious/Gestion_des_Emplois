import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { EventInput } from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AddEventComponent} from '../add-event/add-event.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-emploi-commun',
  templateUrl: './emploi-commun.component.html',
  styleUrls: ['./emploi-commun.component.scss']
})
export class EmploiCommunComponent implements OnInit {

  @ViewChild('calendar',{ static: true }) calendarComponent: FullCalendarComponent; // the #calendar in the template
  content : any;
  event : string = '';
  eventTitle : string;
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Forum 2020', start: new Date() },
    {title: 'Olympiades ehtp 2020', start: new Date()}
  ];
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
  }

  addEvent(arg)
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        event : this.eventTitle,
    };


    this.dialog.open(AddEventComponent, dialogConfig);
    const dialogRef = this.dialog.open(AddEventComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log('Dialog output:', dialogConfig.data.event)
    );
    this.eventTitle = dialogConfig.data.event;
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: this.eventTitle,
        date: arg.date,
      });
    }
  }
  modifyTitle(eventIndex, newTitle) {
    let calendarEvents = this.calendarEvents.slice(); // a clone
    let singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
    singleEvent.title = newTitle;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; // reassign the array
  }



}


