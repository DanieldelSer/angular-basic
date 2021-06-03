import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // get personajes(): Personaje[] {
  //   return this.DbzService.personajes;
  // }

  // cambiarNombre ( event: any) {
  //   console.log(event.target.value);
  // }

  // agregar( event: any ) {
  //   event.preventDefault();
  //   console.log("Hey!!!!");
  // }

  // agregarNuevoPersonaje( argumento: Personaje ){
  //   this.personajes.push( argumento );
  // }

  constructor() {
  }

}
