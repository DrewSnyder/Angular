import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/hero.component.html',
    styleUrls: ['app/hero.component.css']
})
export class HeroComponent implements OnInit{

    title = "Tour of Heroes";

    //Bring Access of HEROS variable to the AppComponent
    heroes : Hero[];

    //selected hero variable
    selectedHero: Hero;

    //On Select event
    onSelect(hero: Hero){
        this.selectedHero = hero;
    }

    constructor(
      private router: Router,
      private heroService: HeroService){
      
    }

    getHeros(){
      this.heroService.getHeros().then(heroes => this.heroes = heroes);
    }

    ngOnInit(){
      this.getHeros();
    }

    gotoDetail(){
      this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
 }

