import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './model/user';
import { Subscription } from 'rxjs';

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
    private userService: UserService
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

  onDelete(user: User) {
    this.userService.remove(user.id).subscribe(
      response => {
        let index = this.userList.indexOf(user);
        this.userList.splice(index, 1);
        // this.changeCounter++;
      },
      err => console.error(err)
    )
  }

  onUpdate(user: any) {
    this.userService.update(user).subscribe(
      response => {
        // this.changeCounter++;
      },
      err => console.log(err)
    )
  }

  onCreate() {
    this.userService.create(this.newUser).subscribe(
      user => {
        this.userList.push(user);
        this.newUser = new User();
        // this.changeCounter++;
      },
      err => console.error(err)
    );
  }
}
