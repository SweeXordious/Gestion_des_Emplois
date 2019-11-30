import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class DaceGuardService implements CanActivate{

  constructor(private appService : AppService, private router: Router){

  }
  canActivate(route : ActivatedRouteSnapshot, stat: RouterStateSnapshot) : 
    Observable<boolean> | Promise<boolean> | boolean {
    if(this.appService.user === 'dace'){
      return true;
    }
    else{
      this.router.navigate(['/']);
    }
  }
}
