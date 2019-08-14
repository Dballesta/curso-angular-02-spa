import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.heroes = this.heroesService.getHeroes();
  }


  verHeroe(index: number) {
    this.router.navigate( ['/heroe', index] );
  }
}
