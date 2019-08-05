import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  list: Student[] = [{
    name: "Dani",
    age: 16,
    email: "dani@gmail.com",
    gender: true,
    regDate: new Date(),
    skills: [{name: "js", level: 7}]
  },
  {
    name: "Andris",
    age: 16,
    email: "andris@gmail.com",
    gender: true,
    regDate: new Date(),
    skills: [{name: "js", level: 9}]
  },
  {
    name: "Rebeka",
    age: 16,
    email: "rebeka@gmail.com",
    gender: false,
    regDate: new Date(),
    skills: [{name: "angular", level: 6}]
  }];

  constructor() { }
}
