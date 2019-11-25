import { AnneeService } from './services/annee.service';
import { GroupService } from './services/group.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AnneeListComponent } from './annee-list/annee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsListComponent,
    AnneeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GroupService, AnneeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
