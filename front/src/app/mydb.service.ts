import { Injectable } from '@angular/core';
import { Module } from './module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MydbService {

  moduleUrls : string;
  modules : Module[];
  constructor(private http : HttpClient) {
    this.moduleUrls = 'http://localhost:8080/module/all';
  }

  findAll(){
    return this.http.get<Module[]>(this.moduleUrls);
  }

  findFirstYear(){
      return this.http.get<Module[]>(this.moduleUrls + '/1');
  }

  findSecondYear(){
    return this.http.get<Module[]>(this.moduleUrls + '/2');
}

findThirdYear(){
  return this.http.get<Module[]>(this.moduleUrls + '/3');
}

}
