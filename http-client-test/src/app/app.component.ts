import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './model/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AppUsers';
  userList: User[];
  userSubscription: Subscription;
  newUser: User = new User();



  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    );
    // console.log(this.userList, this.userService, User, 'seeee')
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

 
}
