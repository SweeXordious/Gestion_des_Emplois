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
    path: '**',
    component: FourZeroFourComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
