/**
 * Created by logicalforhad on 08/02/2016.
 */
import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes'
import {Hero} from "../heroList/hero";
@Injectable()
export class HeroService{
  getHeros():Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly():Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }
}
