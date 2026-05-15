// Importa Component para crear componentes
// e Input para recibir datos desde otro componente
import { Component, Input } from '@angular/core';

// Decorador del componente
@Component({

  // Nombre de la etiqueta HTML del componente
  // Se usa así: <app-character-card>
  selector: 'app-character-card',

  // Indica que el componente es standalone
  // y no necesita app.module.ts
  standalone: true,

  // Aquí se importarían otros componentes
  // o módulos si fueran necesarios
  imports: [],

  // Archivo HTML del componente
  templateUrl: './character-card.html',

  // Archivo CSS del componente
  styleUrl: './character-card.css'
})

// Clase principal del componente
export class CharacterCard {

  // @Input permite recibir datos desde app.html
  // En este caso recibe un personaje
  @Input() character: any;

}
