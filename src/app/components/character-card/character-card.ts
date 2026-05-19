import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css'
})
export class CharacterCard implements OnInit, OnChanges {
  @Input() character: any;

  constructor() {}

  ngOnInit() {
    console.log('CharacterCard ngOnInit character:', this.character);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['character']) {
      console.log('CharacterCard ngOnChanges character:', changes['character'].currentValue);
    }
  }

}