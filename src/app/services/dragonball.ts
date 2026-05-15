import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Dragonball {

  private http = inject(HttpClient);

  private apiUrl = 'https://dragonball-api.com/api/characters?limit=100';

  getCharacters() {

    return this.http.get<any>(this.apiUrl);

  }

}