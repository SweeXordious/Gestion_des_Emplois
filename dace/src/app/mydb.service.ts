import { Injectable } from '@angular/core';
import { Module } from './module';
import { HttpClient } from '@angular/common/http';
import { Element } from './model/element';

@Injectable({
  providedIn: 'root'
})
export class MydbService {

  moduleUrls : string;
  modules : Module[];
  elements : Element[];
  constructor(private http : HttpClient) {
    this.moduleUrls = 'http://localhost:8080';
  }

  findAll(){
    return this.http.get<Module[]>(this.moduleUrls + '/module/all');
  }

  findFirstYear(){
      return this.http.get<Module[]>(this.moduleUrls +  '/module/all');
  }

  findSecondYear(){
    return this.http.get<Module[]>(this.moduleUrls + '/module/all');
}

findThirdYear(){
  return this.http.get<Module[]>(this.moduleUrls + '/module/all');
}

findAllElement(){
  return this.http.get<Element[]>(this.moduleUrls + '/element/all');
}

}
