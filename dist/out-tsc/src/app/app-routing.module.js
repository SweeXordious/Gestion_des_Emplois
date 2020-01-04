import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmploiCommunComponent } from './emploi-commun/emploi-commun.component';
import { ReglesGestionComponent } from './regles-gestion/regles-gestion.component';
const routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    /*{ path: 'user-profile',
      component: UserProfileComponent
    },
    { path: 'modules',
      component: ModulesComponent
    },*/
    { path: 'emploi',
        component: EmploiCommunComponent
    },
    { path: 'regles-gestion',
        component: ReglesGestionComponent
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map