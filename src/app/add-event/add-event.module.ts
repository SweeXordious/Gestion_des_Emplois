import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddEventComponent } from './add-event.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@fullcalendar/core';


@NgModule({
  imports: [BrowserModule, NgbModule,FormsModule],
  declarations: [AddEventComponent],
  exports: [AddEventComponent],
  bootstrap: [AddEventComponent]
})
export class AddEventModule { }
