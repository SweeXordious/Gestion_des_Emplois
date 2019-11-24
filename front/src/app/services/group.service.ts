import { Group } from './../classes/group';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GroupService {

  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/annee/';
  }

  getGroupsList(): Observable <Group[]> {
    return this.http.get<Group[]>(`${this.baseUrl}` + `all`);
  }
}
