import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../shared/user';
import {MatListOption} from '@angular/material/list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User [] = [];
  username: string;
  name: string;
  role: string;
  selectedList: User[];

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.usersList;
  }

  search(query: string) {
    this.users = this.usersService.findUser(query);
  }

  sort(value: string) {
    this.users = this.usersService.sortList(value);
  }

  addUser(): any {
    this.usersService.addUser({
      id: Math.floor((Math.random() * 6) + 10),
      name: this.name,
      username: this.username,
      email: '',
      role: this.role,
      phone: '',
      website: '0'
    });
    this.users = this.usersService.usersList;
    this.clearFields();
  }

  clearFields(): any {
    this.username = this.name = '';
    this.role = '';
  }

  deleteUsers() {
    this.usersService.deleteUsers(this.selectedList);
    this.users = this.usersService.usersList;
  }

  selectItem(users: MatListOption[]) {
    this.selectedList = [];
    users.forEach(element => {
      this.selectedList.push(element.value);
      console.log(element);
    });
  }
}
