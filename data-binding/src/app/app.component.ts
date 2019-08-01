import { Component } from '@angular/core';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice-001';

  getName(): string {
    return `Bond, James Bond`;
  }
  

  
  }
  


