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
 //user: User = new User();
 // userSubscription: any;
 // userList: User[];
  changeCounter: number = 0;


  constructor(
    private userService: UserService,
    private router: Router,
    private ar: ActivatedRoute,
  ) {}

  ngOnInit() {
    //this.userSubscription = this.userService.getAll().subscribe(
    //  users => this.userList = users
  //  )
    // this.ar.params.subscribe(params => {
    //   this.userService.getOne(params.id).subscribe(user => {
    //     this.user = user
    //   })
    // })
    const id = +(this.ar.snapshot.params['id'])
    this.userService.getOne(id).subscribe(user => { this.user = user })
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