import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'User details';
  userSubscription: any;
  userList: User[];
  filterPhrase: string = '';
  orderKey: string = '';
  orderDirection: number = 1;
  changeCounter: number = 0;




  constructor(
    private userService: UserService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  routeToEdit(user: User) {
    this.router.navigateByUrl(`/user/${user.id}`)
  }

  routeToAdd() {
    this.router.navigateByUrl(`/add-user`)
  }

  ngOnInit() {
    this.userService.getAll().subscribe(
      users => this.userList = users
    )
  }

  setSorterKey(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection === -1 ? 1 : -1;
    } else {
      this.orderDirection = 1;
    }

    this.orderKey = key;
  }

  onDelete(user: User) {
    if (confirm(`Are you sure to delete ${user.name.first} ${user.name.last}?`))
      this.userService.remove(user.id).subscribe(
        user => {
          let index = this.userList.indexOf(user);
          this.userList.splice(index, 1);
          this.changeCounter++;
        },
        err => console.error(err)
      )
  }





}
