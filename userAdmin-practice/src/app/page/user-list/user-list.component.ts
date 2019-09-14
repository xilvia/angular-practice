import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user-service';
import { User } from 'src/app/model/user';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'User details';
 // userSubscription: any;
  userList: User[];
  filterPhrase: string = '';
  orderKey: string = '';
  orderDirection: number = 1;
  changeCounter: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private ar: ActivatedRoute,

  ) {
  
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
