import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CharacterCard } from '../../components/character-card/character-card';
import { Dragonball } from '../../services/dragonball';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CharacterCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit{
  characters: any[] = [];
  private cdr = inject(ChangeDetectorRef);
  constructor(private dragonballService: Dragonball) {}
  ngOnInit() {
    console.log('HomePage initialized');

    this.dragonballService.getCharacters().subscribe((response: any) => {
      console.log('RESPUESTA API:', response);
      this.characters = response.items ?? response;
      this.cdr.markForCheck();
    });

  }

}