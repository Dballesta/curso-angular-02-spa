import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html'
})
export class TarjetaHeroeComponent implements OnInit {

  @Input()
  heroe = {};

  @Input()
  index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verHeroe() {
    console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
  }

}
