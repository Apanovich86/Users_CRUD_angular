import {NgModule} from "@angular/core";
import {UserListComponent} from "./components/userApp/user-list/user-list.component";
import { RouterModule, Routes } from '@angular/router';
import {UserRegisterComponent} from "./components/userApp/user-register/user-register.component";
import {UserUpdateComponent} from "./components/userApp/user-update/user-update/user-update.component";

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    pathMatch: 'full'
  },
  {
    path: 'addUser',
    component: UserRegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'updateUser',
    component: UserUpdateComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
