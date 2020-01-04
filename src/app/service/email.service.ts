import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private moduleUrl: string;

  constructor(private http: HttpClient) {
    this.moduleUrl = 'http://localhost:8080/api/email';
  }

  public sendMail(): Observable<any> {
    return this.http.get(this.moduleUrl);
  }


}
