import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BarComponent } from './bar/bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivDashboardComponent } from './div-dashboard/div-dashboard.component';
import { ModuleDashboardComponent } from './module-dashboard/module-dashboard.component';


const routes: Routes = [
  { path : 'dashboard', component : DashboardComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BarComponent,
    DashboardComponent,
    DivDashboardComponent,
    ModuleDashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
