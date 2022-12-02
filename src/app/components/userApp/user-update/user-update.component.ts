import {Component, OnInit} from '@angular/core';
import {userObj} from "../../../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  userObj: userObj;
  currentColor: string = "";

  constructor(private route: ActivatedRoute, private router: Router) {
    this.userObj = new userObj();
    this.route.params.subscribe((res) => {
      this.userObj.userId = res['id']
    })
  }

  ngOnInit(): void {
    this.currentColor = "#0aa30a";
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      const currentUser = userList.find((item: any) => item.userId == this.userObj.userId);
      if (currentUser !== undefined) {
        this.userObj.userName = currentUser.userName;
        this.userObj.email = currentUser.email;
        this.userObj.phoneNumber = currentUser.phoneNumber;
      }
    }
  }

  updateUser() {
    const oldRecords = localStorage.getItem('userList')
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((ind: any) => ind.userId == this.userObj.userId), 1);
      userList.push(this.userObj);
      localStorage.setItem('userList', JSON.stringify(userList));
    }
    this.router.navigateByUrl('');
  }

}
