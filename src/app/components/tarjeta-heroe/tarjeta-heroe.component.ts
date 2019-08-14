// Input para recibir datos del padre
// Output para enviar datos al padre, va acompañado de Event Emitter
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  //No se declara la variable, si no el evento que va a ser observado
  @Output()
  heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
  //   console.log(this.index);
  //   this.router.navigate(['/heroe', this.index]);
  // Enviamos el dato que queramos
    this.heroeSeleccionado.emit( this.index );
  }


}
