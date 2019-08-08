<<<<<<< HEAD
import { User } from '../model/user';
import { Injectable } from '@angular/core';
=======
import { Injectable } from '@angular/core';
import { User } from '../model/user';
>>>>>>> 14608995eb2f047106f52941e090f98cf6a44cba

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list: User[] = [
    new User({
      id: 1,
      name: "Sörös Piroska",
      age: 45,
      email: "piri@gmail.com",
      password: "piriVagyoknemtagadombevallom765*"
    }),
    new User({
      id: 2,
      name: "Boros Piroska",
      age: 25,
      email: "bpiri@gmail.com",
      password: "IAmYourWorstNightmare*"
    })
  ]

  constructor() { }

  get(id: number): User {
    return this.list.filter( user => user.id == id )[0] || new User();
  }
}
