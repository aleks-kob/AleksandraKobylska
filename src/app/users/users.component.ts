import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgModel } from '@angular/forms';
import { USERS } from '../data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;
  selectedUser?: User;
  
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  // addUser() {
  //   this.users.push(this.user)
  // }

  // deleteUser() {
  //   this.users.splice()
  // }

}
