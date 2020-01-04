import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { AddEventComponent } from '../add-event/add-event.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
let EmploiCommunComponent = class EmploiCommunComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.event = '';
        this.calendarVisible = true;
        this.calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
        this.calendarWeekends = true;
        this.calendarEvents = [
            { title: 'Event Now', start: new Date() }
        ];
    }
    ngOnInit() {
    }
    addEvent(arg) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            event: this.eventTitle,
        };
        this.dialog.open(AddEventComponent, dialogConfig);
        const dialogRef = this.dialog.open(AddEventComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(data => console.log('Dialog output:', dialogConfig.data.event));
        this.eventTitle = dialogConfig.data.event;
        if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.calendarEvents = this.calendarEvents.concat({
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
};
tslib_1.__decorate([
    ViewChild('calendar', { static: true })
], EmploiCommunComponent.prototype, "calendarComponent", void 0);
EmploiCommunComponent = tslib_1.__decorate([
    Component({
        selector: 'app-emploi-commun',
        templateUrl: './emploi-commun.component.html',
        styleUrls: ['./emploi-commun.component.scss']
    })
], EmploiCommunComponent);
export { EmploiCommunComponent };
//# sourceMappingURL=emploi-commun.component.js.map