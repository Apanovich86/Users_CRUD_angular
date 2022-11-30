import {Component, OnInit} from '@angular/core';
import {userObj} from "../../../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  userObj: userObj;
  currentColor: string = "";

  constructor(private route: ActivatedRoute, private router: Router) {
    this.userObj = new userObj();
    this.route.params.subscribe((res) => {
      this.userObj.userId = res['id']
    })
  }

  ngOnInit(): void {
    this.currentColor = "#897f08";
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

  backToList() {
    this.router.navigateByUrl('');
  }
}
