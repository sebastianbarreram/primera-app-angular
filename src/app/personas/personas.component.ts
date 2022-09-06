import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  title = 'Sebas';
  deshabilitar = false;
  mensaje = 'No se ha agreagado ninguna persona';
  titulo = '';
  two_way_binding = 'Doctor';
  mostrar = false;

  agregarPersona(): void {
    this.mostrar = true;
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(event: Event) {
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}
