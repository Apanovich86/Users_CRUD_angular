import { Component, OnInit } from '@angular/core';
import {userObj} from "../../../interfaces/user";

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
  constructor() {
    this.userList = [];
  }

  ngOnInit(): void {
  }

}
