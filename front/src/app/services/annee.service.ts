import { Injectable } from '@angular/core';
import { Annee } from '../classes/annee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnneeService {

  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/annee/';
  }

  getGroupsList(): Observable <Annee[]> {
    return this.http.get<Annee[]>(`${this.baseUrl}` + `all`).pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error){
    console.log(error);
    return throwError(error);
  }
}
