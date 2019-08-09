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
  title = 'Data Table';
  userList: User[];
  userSubscription: Subscription;

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

   // onDelete(user: User) {
  //   this.filmService.remove(film.id).subscribe(
  //     response => {
  //       let index = this.filmList.indexOf(film);
  //       this.filmList.splice(index, 1);
  //       this.changeCounter++;
  //     },
  //     err => console.error(err)
  //     )
  //   }

  //   onUpdate(film: any) {
  //     parseInt(film.release);
  //     this.filmService.update(film).subscribe(
  //       response => {
  //         this.changeCounter++;
  //       },
  //       err => console.log(err)
  //       )
  //     }

  //     onCreate() {
  //       this.filmService.create(this.newFilm).subscribe(
  //         film => {
  //           this.filmList.push(film);
  //           this.newFilm = new Film();
  //           this.changeCounter++;
  //         },
  //         err => console.error(err)
  //         );
  // }
}
