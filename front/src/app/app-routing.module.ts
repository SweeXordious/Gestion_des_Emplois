import { AppComponent } from './app.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"", component: AppComponent}, 
  { path:"groupsComponent", component: GroupsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
