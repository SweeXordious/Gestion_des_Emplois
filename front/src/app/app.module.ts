import { GroupService } from './services/group.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsListComponent } from './groups-list/groups-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
