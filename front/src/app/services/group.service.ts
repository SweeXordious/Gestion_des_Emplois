import { Group } from './../classes/group';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/groupe/';
  }

  getGroupsList(): Observable <Group[]> {
    return this.http.get<Group[]>(`${this.baseUrl}` + `all`).pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error){
    console.log(error);
    return throwError(error);
  }
}
