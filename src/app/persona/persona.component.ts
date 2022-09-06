import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  nombre: string = 'Sebas';
  apellido: string = 'Barr';
  private edad: number = 26;

  getEdad(): number {
    return this.edad;
  }
}
