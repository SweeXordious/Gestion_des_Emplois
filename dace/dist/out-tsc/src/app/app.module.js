import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmploiCommunComponent } from './emploi-commun/emploi-commun.component';
import { MenuComponent } from './menu/menu.component';
import { SallesComponent } from './salles/salles.component';
import { ReglesGestionComponent } from './regles-gestion/regles-gestion.component';
import { BarComponent } from './bar/bar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEventComponent } from './add-event/add-event.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuCtcComponent } from './menu-ctc/menu-ctc.component';
const routes = [
    { path: 'dashboard', component: DashboardComponent },
    /* { path: 'user-profile',
       component: UserProfileComponent
     },
     { path: 'modules',
       component: ModulesComponent
     },
     */ { path: 'emploi',
        component: EmploiCommunComponent },
    { path: 'regles-gestion',
        component: ReglesGestionComponent
    }
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            DashboardComponent,
            EmploiCommunComponent,
            MenuComponent,
            SallesComponent,
            ReglesGestionComponent,
            BarComponent,
            AddEventComponent,
            MenuCtcComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            MaterialModule,
            MatInputModule,
            MatDatepickerModule,
            MatPaginatorModule,
            MatTableModule,
            MatSortModule,
            FormsModule,
            FullCalendarModule,
            MatDatepickerModule,
            NgbModule,
            BrowserAnimationsModule,
            HttpClientModule,
        ],
        providers: [],
        bootstrap: [AppComponent],
        entryComponents: [
            EmploiCommunComponent,
            AddEventComponent,
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map