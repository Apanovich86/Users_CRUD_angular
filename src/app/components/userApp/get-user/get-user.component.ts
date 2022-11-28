import { Component, OnInit } from '@angular/core';
import {userObj} from "../../../interfaces/user";

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  selectedItem: userObj = {};
  onSelect(item: userObj): void {
    this.selectedItem = item;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
