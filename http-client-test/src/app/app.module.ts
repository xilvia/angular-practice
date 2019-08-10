import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './app/page/home/home.component';
import { UsersComponent } from './app/page/users/users.component';
import { UserEditComponent } from './app/page/user-edit/user-edit.component';
import { AddUserComponent } from './app/page/add-user/add-user.component';
import { NavComponent } from './app/nav/nav.component';
import { UserService } from './service/user.service';


const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserEditComponent,
    AddUserComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
