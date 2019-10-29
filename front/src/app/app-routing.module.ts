import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ModulesComponent } from './modules/modules.component';
import { EmploiComponent } from './emploi/emploi.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch:'full'},
  { path: 'user-profile',
    component: UserProfileComponent
  },
  { path: 'modules',
    component: ModulesComponent
  },
  { path: 'emploi',
    component: EmploiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
