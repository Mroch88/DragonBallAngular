import { Component, inject, ChangeDetectorRef } from '@angular/core';

import { CharacterCard } from '../../components/character-card/character-card';

import { Dragonball } from '../../services/dragonball';

@Component({
  selector: 'app-sagas-page',
  standalone: true,
  imports: [CharacterCard],
  templateUrl: './sagas-page.html',
  styleUrl: './sagas-page.css'
})

export class SagasPage {

  dragonballService = inject(Dragonball);
  private cdr = inject(ChangeDetectorRef);

  characters: any[] = [];

  ngOnInit() {

    this.dragonballService.getCharacters().subscribe((response: any) => {

      // Filtra personajes relacionados con Z
      this.characters = response.items.filter((character: any) =>

        character.affiliation === 'Z Fighter'

      );
      this.cdr.markForCheck();

    });

  }

}