import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import 'bootstrap/dist/js/bootstrap.bundle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BarComponent } from './bar/bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ModulesComponent } from './modules/modules.component';
import { CaseEmploiComponent } from './case-emploi/case-emploi.component';
import { EmploiComponent } from './emploi/emploi.component';

const routes: Routes = [
  { path : 'dashboard', component : DashboardComponent},
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
  declarations: [
    AppComponent,
    MenuComponent,
    BarComponent,
    DashboardComponent,
    UserProfileComponent,
    ModulesComponent,
    CaseEmploiComponent,
    EmploiComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
