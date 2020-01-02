import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEventComponent } from './add-event.component';
import { FormsModule } from '@angular/forms';
let AddEventModule = class AddEventModule {
};
AddEventModule = tslib_1.__decorate([
    NgModule({
        imports: [BrowserModule, NgbModule, FormsModule],
        declarations: [AddEventComponent],
        exports: [AddEventComponent],
        bootstrap: [AddEventComponent]
    })
], AddEventModule);
export { AddEventModule };
//# sourceMappingURL=add-event.module.js.map