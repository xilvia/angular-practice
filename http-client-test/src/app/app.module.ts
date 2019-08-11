import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './app/page/home/home.component';
import { UsersComponent } from './app/page/users/users.component';
import { UserEditComponent } from './app/page/user-edit/user-edit.component';
import { AddUserComponent } from './app/page/add-user/add-user.component';
import { NavComponent } from './app/nav/nav.component';
import { UserService } from './service/user.service';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';


const appRoutes: Routes = [
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserEditComponent,
    AddUserComponent,
    NavComponent,
    FilterPipe,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
