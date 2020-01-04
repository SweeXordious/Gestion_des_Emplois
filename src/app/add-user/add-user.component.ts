import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private userService : UserService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    const username = form.value['username'];
    const password = form.value['password'];
    const fonction = form.value['fonction'];

    this.userService.addUser(username,password,fonction);
  }

}
