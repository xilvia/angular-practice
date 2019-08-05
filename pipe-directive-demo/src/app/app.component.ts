import { Component } from '@angular/core';
import { StudentService } from './service/student.service';
import { Student } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-directive-demo';

  studentList: Student[] = [];
  filterKey: string ="name"; // mert konkrétan name-re akarunk szűrni
  filterPhrase: string =""; // ez meg a keresőkifejezés, amit a júzer beírt

  constructor(
    private studentService: StudentService
  ) {
    this.studentList = this.studentService.list; // a studentService.list-hez itt a konstruktorban elvileg nem kéne a this.
  }
}
