import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ReglesGestionComponent = class ReglesGestionComponent {
    constructor(calendar) {
        this.annees = ['1ere année', '2eme année', '3eme année'];
        this.nbrs = [1, 2, 3, 4];
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    }
};
ReglesGestionComponent = tslib_1.__decorate([
    Component({
        selector: 'app-regles-gestion',
        templateUrl: './regles-gestion.component.html',
        styleUrls: ['./regles-gestion.component.scss'],
        styles: [`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }
  `]
    })
], ReglesGestionComponent);
export { ReglesGestionComponent };
//# sourceMappingURL=regles-gestion.component.js.map