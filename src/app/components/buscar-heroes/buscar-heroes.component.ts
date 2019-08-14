import { Component, OnInit } from '@angular/core';

//Router
import { Router } from '@angular/router';
// Con ActivatedRoute
import { ActivatedRoute } from '@angular/router';


import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html'
})

export class BuscarHeroesComponent implements OnInit {

  heroes: any[] = [];
  busqueda: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router

  ) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarHeroes(params.busqueda);
      this.busqueda = params.busqueda;
    });
  }


  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }

}
