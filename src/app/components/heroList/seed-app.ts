import {Component,OnInit} from 'angular2/core';
import {Hero} from "./hero";
import {HeroDetailComponent} from './../heroDetails/hero-detail.component';
import {HeroService} from "../services/special-super-hero.service";
@Component({
  selector: 'seed-app',
  templateUrl: 'app/components/heroList/seed-app.html',
  styleUrls: ["app/components/heroList/site.css"],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class SeedApp implements OnInit {
  public title = 'Tour of Heroes';
  public heroes:Hero[];
  public selectedHero:Hero;

  constructor(private _heroService:HeroService) {
  }

  private getHeroes():void {
    this._heroService.getHeros().then(heroes=>this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
}
