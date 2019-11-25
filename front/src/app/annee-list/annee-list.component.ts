import { AnneeService } from './../services/annee.service';
import { Component, OnInit } from '@angular/core';
import { Annee } from '../classes/annee';

@Component({
  selector: 'app-annee-list',
  templateUrl: './annee-list.component.html',
  styleUrls: ['./annee-list.component.scss']
})
export class AnneeListComponent implements OnInit {


  constructor(private anneeService: AnneeService) { }

  annees: Annee[];

  ngOnInit() {
    this.anneeService.getGroupsList().subscribe(data => {this.annees = data; });
  }

}
