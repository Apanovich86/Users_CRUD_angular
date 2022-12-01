import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/userApp/user-list/user-list.component';
import { UserRegisterComponent } from './components/userApp/user-register/user-register.component';
import {FormsModule} from "@angular/forms";
import { UserUpdateComponent } from './components/userApp/user-update/user-update.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { GetUserComponent } from './components/userApp/get-user/get-user.component';
import { MyEventDirective } from './directives/my-event.directive';
import { MyColorChangeDirective } from './directives/my-color-change.directive';
import { TextTransformPipe } from './pipes/text-transform.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegisterComponent,
    UserUpdateComponent,
    GetUserComponent,
    MyEventDirective,
    MyColorChangeDirective,
    TextTransformPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
