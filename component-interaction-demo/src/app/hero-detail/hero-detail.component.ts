import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  @Output() onChange: EventEmitter<Hero> = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  changeTrigger(): void{
=======
  changeTrigger(): void {
>>>>>>> 47a3e5ce24521fbc6855e7f4f7a23829c4a1e687
    this.onChange.emit(this.hero);
  }

}
