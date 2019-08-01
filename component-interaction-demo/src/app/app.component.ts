import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction-demo';

  heroes: Hero[] = [
    { name: "Bombasto", address: "New York", superpower: "Can explode" },
    { name: "IceMan", address: "New York", superpower: "Can freeze" },
    { name: "Captain Planet", address: "Budapest", superpower: "Can save the Earth" }
  ]; //mindig az aktuális hős adatait jelenítse meg az appcomponent

  selectedHero: Hero = this.heroes[0];

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  heroChanged(): void {
    console.log('changed Hero: ', hero);
  }
}
