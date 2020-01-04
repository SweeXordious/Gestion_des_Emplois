import { Component, OnInit, ViewEncapsulation, ViewChild, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EventEmitter } from 'events';

export interface DialogData {
  event: string;
}

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {

  @ViewChild('content',{ static: true }) content;
  closeResult: string;


  constructor(public dialogRef: MatDialogRef<AddEventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onSubmit() {
    this.onClose();
}

onClose() {
  this.dialogRef.close();
}

}
