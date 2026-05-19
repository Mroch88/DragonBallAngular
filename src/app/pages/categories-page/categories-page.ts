import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Dragonball } from '../../services/dragonball';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css'
})
export class CategoriesPage {

  dragonballService = inject(Dragonball);
  private cdr = inject(ChangeDetectorRef);

  planets: any[] = [];

  ngOnInit() {

    this.dragonballService.getPlanets().subscribe((response: any) => {

      this.planets = response.items;
      this.cdr.markForCheck();

    });

  }

}