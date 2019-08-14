import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';

//Router
import { Router } from "@angular/router"

// Con ActivatedRoute
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
    ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(this.heroe);

    });
  }

  ngOnInit() {
  }

  volverHeroes() {
    this.router.navigate( ['/heroes'] );
  }

}