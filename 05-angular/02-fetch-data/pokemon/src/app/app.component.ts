import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  constructor(private pokemonService: PokemonService) {}

  //This is run automatically on Angular if it exists on a component
  ngOnInit(): void {
    this.pokemonService.getPokemon(2).subscribe(pokemon => {
      console.log(pokemon.name);
    });
  }
}
