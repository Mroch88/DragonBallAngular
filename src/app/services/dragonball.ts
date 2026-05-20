import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Dragonball {

  private http = inject(HttpClient);

  private apiURL = 'https://dragonball-api.com/api';

  getCharacters() {
    return this.http.get<any>(this.apiURL + '/characters?limit=100');
    
  }

  getPlanets() {
    return this.http.get<any>(this.apiURL + '/planets?limit=100');
  }

  getCharacterById(id: string) {
  return this.http.get<any>(this.apiURL + '/characters/' + id);
}

}