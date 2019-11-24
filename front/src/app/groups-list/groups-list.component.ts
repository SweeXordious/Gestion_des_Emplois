import { GroupService } from './../services/group.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../classes/group';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  groups: Group[];

  ngOnInit() {
    this.groupService.getGroupsList().subscribe(data => {this.groups = data; });
  }

}
