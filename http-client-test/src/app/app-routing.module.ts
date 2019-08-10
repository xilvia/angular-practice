import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './app/page/home/home.component';
import { UsersComponent } from './app/page/users/users.component';
import { UserEditComponent } from './app/page/user-edit/user-edit.component';
import { AddUserComponent } from './app/page/add-user/add-user.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: "edit-user/:id",
    component: UserEditComponent
  },
  {
    path: "add-user",
    component: AddUserComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
