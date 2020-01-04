import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Module } from '../model/module';
import { Observable, Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ModuleService {
 
  private moduleUrl: string;
 
  constructor(private http: HttpClient) {
    this.moduleUrl = 'http://localhost:8080/module/all';
  }
 
  public getYear(year : number): Observable<any> {
    return this.http.get(this.moduleUrl+'/'+year);
  }

 
}