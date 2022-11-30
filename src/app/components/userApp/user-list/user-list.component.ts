import { Component, OnInit } from '@angular/core';
import {userObj} from "../../../interfaces/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: userObj [];
  selectedItem: userObj = {};
  onSelect(item: userObj): void {
    this.selectedItem = item;
  }
  constructor(private router: Router) {
    this.userList = [];
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
    }
  }

  delete(id:any) {
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((ind:any) => ind.userId === id), 1);
      localStorage.setItem('userList', JSON.stringify(userList));
    }
    this.getAllUsers();
  }

}
