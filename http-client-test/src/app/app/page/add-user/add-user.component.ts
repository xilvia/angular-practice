import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();
  userSubscription: any;
  userList: User[];
  changeCounter: number = 0;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.userSubscription = this.userService.getAll().subscribe(
    //   users => this.userList = users

    //)
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.userService.create(this.user).subscribe(
      user => {
        this.userList.push(this.user);
        this.router.navigateByUrl("/users")
        this.changeCounter++;
      }, err => console.error(err)

    )

  }

  // onCreate() {
  //   this.userService.create(this.newUser).subscribe(
  //     user => {
  //       this.userList.push(user);
  //       this.newUser = new User();
  //       this.changeCounter++;
  //     },
  //     err => console.error(err)
  //   );
  // }
}
