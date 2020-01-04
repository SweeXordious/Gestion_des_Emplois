import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule }
from '@angular/material';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmploiCommunComponent } from './emploi-commun/emploi-commun.component';
import { MenuComponent } from './menu/menu.component';
import { SallesComponent } from './salles/salles.component';
import { ReglesGestionComponent } from './regles-gestion/regles-gestion.component';
import { BarComponent } from './bar/bar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEventComponent } from './add-event/add-event.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuCtcComponent } from './menu-ctc/menu-ctc.component';
import { CaseEmploiComponent } from './case-emploi/case-emploi.component';
import { EmploiComponent } from './emploi/emploi.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { DaceGuardService } from './dace-guard.service';
import { AppService } from './app.service';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { DivDashboardComponent } from './dashboard/div-dashboard/div-dashboard.component';
import { ModuleDashboardComponent } from './dashboard/module-dashboard/module-dashboard.component';
import { ModuleService } from './service/module.service';
import { ModulesComponent } from './modules/modules.component';
import { NotificationComponent } from './notification/notification.component';
import { CtcNotificationComponent } from './ctc-notification/ctc-notification.component';
import 'bootstrap/dist/js/bootstrap.bundle';
import { EmpSemComponent } from './emp-sem/emp-sem.component';
import { MenuCpfComponent } from './menu-cpf/menu-cpf.component';
import { NotificationCpfComponent } from './notification-cpf/notification-cpf.component';
import { CaseEmploiCpfComponent } from './case-emploi-cpf/case-emploi-cpf.component';
import { EmpSemCaseComponent } from './emp-sem/emp-sem-case/emp-sem-case.component';
import { MenuProfComponent } from './menu-prof/menu-prof.component';
import { DispoComponent } from './dispo/dispo.component';
import { AuthComponent } from './auth/auth.component';
import { DispoCaseComponent } from './dispo/dispo-case/dispo-case.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AllDispoComponent } from './all-dispo/all-dispo.component';
import { CaseComponent } from './notification-cpf/case/case.component';
import {EmploiService} from "./service/emploi.service";



const routes: Routes = [
  { path : 'dashboard', component : CaseEmploiComponent},
 /* { path: 'user-profile',
    component: UserProfileComponent
  },
  { path: 'modules',
    component: ModulesComponent
  },
  */{ path: 'emploi',
    component: EmploiCommunComponent},
    { path: 'regles-gestion',
    component: ReglesGestionComponent
  },


  { path: '/emploiii', component:CaseEmploiComponent}


];
@NgModule({
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
    CaseEmploiComponent,
    EmploiComponent,
    UserProfileComponent,
    FourZeroFourComponent,
    DivDashboardComponent,
    ModuleDashboardComponent,
    ModulesComponent,
    NotificationComponent,
    CtcNotificationComponent,
    EmpSemComponent,
    MenuCpfComponent,
    NotificationCpfComponent,
    CaseEmploiCpfComponent,
    EmpSemCaseComponent,
    MenuProfComponent,
    DispoComponent,
    AuthComponent,
    DispoCaseComponent,
    AddUserComponent,
    AllDispoComponent,
    CaseComponent,

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
  providers: [
    DaceGuardService,
    AppService,
      EmploiService,
    ModuleService
  ],
  bootstrap: [AppComponent],
  entryComponents : [
    EmploiCommunComponent,
    AddEventComponent,
  ],
})
export class AppModule { }
