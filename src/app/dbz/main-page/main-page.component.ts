import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder:  number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {
  personajes:Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1500
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];
  
  nuevo:Personaje = {
    nombre: '',
    poder:  0
  }

  /*cambiarNombre(event: any) {
    console.log(event.target.value);
  }*/
  
  agregar() {
    if(this.nuevo.nombre.trim().length == 0) {
      return;
    }

    if(this.nuevo.poder == null) {
      return;
    }
    console.log();
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder:   0
    }
  }

}
