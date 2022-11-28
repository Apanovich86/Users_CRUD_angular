import {Injectable} from '@angular/core';
import {Init} from './users-init';

@Injectable({
  providedIn: 'root',
})
export class UserService extends Init {

  constructor() {
    super();
    this.load();
  }

  getUsers() {
    let user = localStorage.getItem('userList');
    if (user !== null) {
      JSON.parse(user)
    }
    return user;
  }

  addEmployee(newUser: any) {
    let users = localStorage.getItem('userList');
    if (users !== null) {
      const userList = JSON.parse(users)
      userList.push(newUser);
      localStorage.setItem('userList', JSON.stringify(userList));
    } else {
      const userArr = [];
      userArr.push(users);
      localStorage.setItem('userList', JSON.stringify(userArr));
    }
  }

  deleteEmployee(id: any) {
    let users = localStorage.getItem('userList');
    if (users !== null) {
      const userList = JSON.parse(users);
      for (let i = 0; i < userList.length; i++) {
        if (userList[i].id == id) {
          userList.splice(i, 1);
          localStorage.setItem('userList', JSON.stringify(userList));
        }
      }
    }
  }

  updateEmployee(oldUser: any, newUser: any) {
    let users = localStorage.getItem('userList');
    if (users !== null) {
      const usersList = JSON.parse(users);
      for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].id == usersList.id) {
          usersList[i] = newUser;
        }
      }
      localStorage.setItem('userList', JSON.stringify(usersList));
    }
  }
}
