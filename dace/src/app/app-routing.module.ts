import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {EmploiCommunComponent} from './emploi-commun/emploi-commun.component';
import {ReglesGestionComponent} from './regles-gestion/regles-gestion.component';
import { CaseEmploiComponent } from './case-emploi/case-emploi.component';
import { EmploiComponent } from './emploi/emploi.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DaceGuardService } from './dace-guard.service';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { ModulesComponent } from './modules/modules.component';
import { NotificationComponent } from './notification/notification.component';
import { CtcNotificationComponent } from './ctc-notification/ctc-notification.component';
import { EmpSemComponent } from './emp-sem/emp-sem.component';
import { NotificationCpfComponent } from './notification-cpf/notification-cpf.component';
import { DispoComponent } from './dispo/dispo.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AllDispoComponent } from './all-dispo/all-dispo.component';



const routes: Routes = [
  { path: 'dashboard', redirectTo: 'dashboard', pathMatch:'full'},
  { path : 'dashboard', component : DashboardComponent},
  /*{ path: 'user-profile',
    component: UserProfileComponent
  },*/
  { path: 'modules',
    component: ModulesComponent
  },
  { path: 'emploi', component: EmploiCommunComponent
  },
  { path: 'regles-gestion',
    component: ReglesGestionComponent
  },
  {
    path: 'emploiCommun',
    component: EmploiComponent
  }
  ,
  {
    path: 'profile',
    component:  UserProfileComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'notification-ctc',
    component: CtcNotificationComponent
  },
  {
    path: 'semestriel',
    component: EmpSemComponent
  },
  {
    path: 'notification-cpf',
    component: NotificationCpfComponent
  },
  {
    path: 'dispo',
    component: DispoComponent
  },
  {
    path: 'alldispo',
    component: AllDispoComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  },
  {
    path: '**',
    component: FourZeroFourComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
