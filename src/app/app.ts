// Importa Component para crear componentes
// e inject para usar servicios
import { Component, inject } from '@angular/core';

// Importa el componente de las cards
import { CharacterCard } from './components/character-card/character-card';

// Importa el navbar
import { Navbar } from './components/navbar/navbar';

// Importa el servicio que conecta con la API
import { Dragonball } from './services/dragonball';

// Decorador principal del componente raíz
@Component({

  // Etiqueta principal HTML
  selector: 'app-root',

  // Componente standalone
  standalone: true,

  // Componentes usados dentro de app.html
  imports: [CharacterCard, Navbar],

  // HTML principal
  templateUrl: './app.html',

  // CSS principal
  styleUrl: './app.css'
})

// Clase principal de la app
export class App {

  // Inyecta el servicio Dragonball
  dragonballService = inject(Dragonball);

  // Array donde se guardan personajes
  characters: any[] = [];

  // Se ejecuta automáticamente al iniciar
  ngOnInit() {

    // Llama a la API
    this.dragonballService.getCharacters().subscribe({

      // Si la API responde correctamente
      next: (response: any) => {

        // Muestra respuesta en consola
        console.log(response);

        // Guarda personajes en el array
        this.characters = response.items;

      },

      // Si ocurre un error
      error: (error) => {

        // Muestra error en consola
        console.error(error);

      }

    });

  }

}