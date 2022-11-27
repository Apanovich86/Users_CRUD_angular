import { Component, OnInit } from '@angular/core';
import {userObj} from "../../../interfaces/user";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userObj: userObj = new userObj()
  constructor() { }

  ngOnInit(): void {
  }

}
