import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Dragonball {

  private http = inject(HttpClient);

  private charactersUrl = 'https://dragonball-api.com/api/characters?limit=100';
  private planetsUrl = 'https://dragonball-api.com/api/planets?limit=100';

  getCharacters() {
    return this.http.get<any>(this.charactersUrl);
    
  }

  getPlanets() {
    return this.http.get<any>(this.planetsUrl);
  }

}