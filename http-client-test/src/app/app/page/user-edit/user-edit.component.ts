import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  userSubscription: any;
  userList: User[];
  changeCounter: number = 0;


  constructor(
    private userService: UserService,
    private router: Router,
    private ar: ActivatedRoute,
  ) {
    this.ar.params.forEach(
      params => {
        console.log(params);
        this.user = this.userService.get(params.id);
      }
    );
  }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    )
  }


  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.userService.update(this.user).subscribe(
      user => {
        this.router.navigateByUrl("/users")
        this.changeCounter++;
      }, err => console.error(err)

    )

  }


}