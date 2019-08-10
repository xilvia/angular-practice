import { Component, OnInit, IterableDiffers } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userSubscription: any;
  userList: User[] = [];

  numberOfAllUsers: number = 0;
  numberOfActiveUsers: number = 0;
  numberOfInactiveUsers: number = 0;
  sumBalance: number = 0;
  numberOfAppleFans: number = 0;

  constructor(
    private userService: UserService
  ) {
    this.userSubscription = this.userService.getAll().subscribe(
      users => {

        this.numberOfAllUsers = users.length;

        for (let k in users) {
          users[k].isActive === true ?
            this.numberOfActiveUsers = this.numberOfActiveUsers + 1 :
            this.numberOfInactiveUsers = this.numberOfInactiveUsers + 1
        };

        for (let k in users) {
          users[k].favoriteFruit === 'apple' ? this.numberOfAppleFans = this.numberOfAppleFans + 1 :
            this.numberOfAppleFans
        };

        for (let k in users) {
          let currBalance = parseFloat(users[k].balance.replace("$", "").replace(",", ""));
          this.sumBalance = this.sumBalance + currBalance;
        }

      }
    )
  }

  ngOnInit() {
  }

}
