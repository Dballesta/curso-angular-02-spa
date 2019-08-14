import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../../services/heroes.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) {
    console.log('navbar funcando');
  }

  ngOnInit() {
  }

  buscarHeroe(busqueda: string) {
    this.router.navigate(['/buscarHeroes', busqueda]);
  }


}
