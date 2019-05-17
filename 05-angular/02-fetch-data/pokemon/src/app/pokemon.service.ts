import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//This is where we're serving the PokemonService
export class PokemonService {
  constructor(private http: HttpClient) {}
  getPokemon(pokeId: number): Observable<Pokemon> {
    console.log('We made it!');
    return this.http.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${pokeId}/`
    );
  }
}

interface Pokemon {
  name: string;
  weight: number;
  height: number;
  abilities: Ability[];
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
