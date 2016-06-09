import { Injectable} from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{

    getHeros(){
        return Promise.resolve(HEROES);
    }

    getHero(id: number){
        return this.getHeros()
                    .then(heroes => 
                    heroes.filter(hero=> hero.id === id)[0]);
    }
}