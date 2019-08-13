import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './app/page/home/home.component';
import { UsersComponent } from './app/page/users/users.component';
import { UserEditComponent } from './app/page/user-edit/user-edit.component';
import { AddUserComponent } from './app/page/add-user/add-user.component';
import { AboutComponent } from './app/page/about/about.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: "user/:id",
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
    path: "about",
    component: AboutComponent
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
