import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
let AddEventComponent = class AddEventComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onSubmit() {
        this.onClose();
    }
    onClose() {
        this.dialogRef.close();
    }
};
tslib_1.__decorate([
    ViewChild('content', { static: true })
], AddEventComponent.prototype, "content", void 0);
AddEventComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-event',
        templateUrl: './add-event.component.html',
        encapsulation: ViewEncapsulation.None,
        styleUrls: ['./add-event.component.scss']
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA))
], AddEventComponent);
export { AddEventComponent };
//# sourceMappingURL=add-event.component.js.map