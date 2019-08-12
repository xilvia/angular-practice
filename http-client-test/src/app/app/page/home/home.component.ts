import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userSubscription: any;
  userList: User[] = [];
  numberOfActiveUsers: number = 0;
  numberOfInactiveUsers: number = 0;
  numberOfAllUsers: number = 0;
  sumBalance: number = 0;
  numberOfAppleFans: number = 0;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => {
        users.forEach(user => {
          if (user.isActive) {
            this.numberOfActiveUsers = this.numberOfActiveUsers + 1;
          } else {
            this.numberOfInactiveUsers = this.numberOfInactiveUsers + 1;
          }
          this.numberOfAllUsers = this.numberOfActiveUsers + this.numberOfInactiveUsers;

          this.numberOfAppleFans = user.favoriteFruit === 'apple'
            ? this.numberOfAppleFans + 1
            : this.numberOfAppleFans;
          if (user.balance) {
            const currBalance = parseFloat(user.balance.replace('$', '').replace(',', ''));
            this.sumBalance = this.sumBalance + currBalance;
          }
        });
      }
    )
  }

}