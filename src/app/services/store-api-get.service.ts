import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreApiGetService {
 
  constructor(private http: HttpClient, 
              private activatedRoute: ActivatedRoute) { }

  getPokemon(){
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/56')
  }


  getRickAndMorty(){
    return this.http.get<any>('https://rickandmortyapi.com/api/character/25')
  }


  getAllElements(){
    return this.activatedRoute.params.pipe(
      concatMap(respParams => {
        return this.getPokemon().pipe(
          concatMap(respPokemon => 
            this.getRickAndMorty().pipe(
              map(respRicky => {
                return {respParams,respPokemon,respRicky}
              })
            ))
        )
      })
    )
  }
}
