import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Dragonball } from '../../services/dragonball';
import { CharacterCard } from '../../components/character-card/character-card';

@Component({
  selector: 'app-villains-page',
  standalone: true,
  imports: [CharacterCard],
  templateUrl: './villains-page.html',
  styleUrl: './villains-page.css'
})

export class VillainsPage implements OnInit {

  dragonballService = inject(Dragonball);
  private cdr = inject(ChangeDetectorRef);

  villains: any[] = [];

  ngOnInit(): void {

    this.dragonballService.getCharacters().subscribe((response: any) => {

      this.villains = response.items.filter((character: any) =>
        character.affiliation === 'Villain'
      );
      this.cdr.markForCheck();

    });

  }

}