import { AnneeListComponent } from './annee-list/annee-list.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'groupsComponent', component: GroupsListComponent},
  { path: 'anneeComponent', component: AnneeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
