import { Pipe, PipeTransform } from '@angular/core';
import {userObj} from "../interfaces/user";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userList: userObj [], value: any) {
    return userList.filter((user:any)=>{
      return user.userName?.includes(value)
      }
    )
  }

}
