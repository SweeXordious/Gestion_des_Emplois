import { Injectable } from '@angular/core';
import { UserModule } from './user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users : UserModule[] = [
    {
      id : 0,
      username : 'dace',
      password : 'dace',
      fonction : 'dace'
    },
    {
      id : 0,
      username : 'cpf',
      password : 'cpf',
      fonction : 'cpf'
    },
    {
      id : 0,
      username : 'ctc',
      password : 'ctc',
      fonction : 'ctc'
    },
    {
      id : 0,
      username : 'prof',
      password : 'prof',
      fonction : 'prof'
    },
    {
      id : 0,
      username : 'prof5',
      password : 'prof5',
      fonction : 'prof'
    }
  ];

  addUser(username: string, password: string, fonction: string){
    const userObject: UserModule = {
        id : 0,
        username : 'prof5',
        password : 'prof5',
        fonction : 'prof'
    };

    userObject.username = username;
    userObject.password = password;
    userObject.fonction = fonction;
    userObject.id = this.users.length + 1 ;
    
    for(let user of this.users){
      if(user.username === userObject.username){
        return null;
      }
    }

    this.users.push(userObject);
  }
}
